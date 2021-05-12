/*eslint-disable*/
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersState } from "../../../redux/actions/actionUpgrade";
import EditOrder from "./EditOrder/EditOrder";
// import "./_OrdersEdit.scss";

const ModifyOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const allOrders = useSelector((store) => store.reducerOrderUser.allOrders);
  const orderState = useSelector(
    (store) => store.reducerOrderState.allOrderState
  );
  const orderStateWithDate = orderState?.map((order) => {
    let createdAt;
    let createdDate;
    let createdTime;
    createdAt = new Date(order?.createdAt);
    createdDate = createdAt.toLocaleDateString("es-AR");
    createdTime = createdAt.toLocaleTimeString("es-AR");

    order.date = createdDate + " " + createdTime;
    return order;
  });
  const ordersWithDate = allOrders.map((order) => {
    let createdAt;
    let createdDate;
    let createdTime;
    createdAt = new Date(order?.createdAt);
    createdDate = createdAt.toLocaleDateString("es-AR");
    createdTime = createdAt.toLocaleTimeString("es-AR");

    order.date = createdDate + " " + createdTime;
    return order;
  });

  const [orders, setOrders] = useState([]);
  const toast = useRef(null);
  const [nrorders, setNrorders] = useState(0);

  useEffect(() => {
    setOrders(ordersWithDate);
  }, []);

  const onCellSelect = (event) => {
    setNrorders(event.rowData.id);
  };

  const dispatch = useDispatch();
  const onChangeStatus = (e) => {
    dispatch(getAllOrdersState(e.target.value));
  };
  const handleFilterClient = (e) => {
    const filter = allOrders.filter((user) =>
      user.user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOrders(filter);
  };

  const statuses = [
    { label: "Open", value: "open" },
    { label: "Loading", value: "loading" },
    { label: "Pending", value: "pending" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Completed", value: "completed" },
  ];
  const onEditorValueChange = (productKey, props, value) => {
    let updatedProducts = [...props.value];
    updatedProducts[props.rowIndex][props.field] = value;
    dataTableFuncMap[`${productKey}`](updatedProducts);
  };
  const statusEditor = (productKey, props) => {
    return (
      <Dropdown
        value={props.rowData["state"]}
        options={statuses}
        optionLabel="label"
        optionValue="value"
        onChange={(e) => onEditorValueChange(productKey, props, e.value)}
        style={{ width: "100%" }}
        placeholder="Select a Status"
        itemTemplate={(option) => {
          return (
            <span
              className={`product-badge status-${option.value.toLowerCase()}`}
            >
              {option.label}
            </span>
          );
        }}
      />
    );
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "open":
        return "Open";

      case "loading":
        return "Loading";

      case "pending":
        return "Pending";

      case "cancelled":
        return "Cancelled";

      case "completed":
        return "Completed";

      default:
        return "NA";
    }
  };
  const statusBodyTemplate = (rowData) => {
    return getStatusLabel(rowData.state);
  };
  return (
    <div className="Orders">
      <div className="ordertitle">
        <h2>Find all orders</h2>
        <span>
          Click on the order you want to see and then press View Detail
        </span>
        <br />
        <span>Filter by client name & by order state</span>
      </div>
      <div className="allorders">
        <Toast ref={toast} />
        <div className="filterorders">
          <div className="typesfilters">
            <button
              className="getallOrders"
              onClick={() => setOrders(allOrders)}
            >
              All Orders
            </button>
          </div>
          <div className="typesfilters">
            <div className="filterState">
              <select className="ostateselector" onChange={onChangeStatus}>
                <option value="" disabled selected>
                  Selected State
                </option>
                <option value="open">Open</option>
                <option value="loading">Loading</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>

              <div>
                <button
                  className="btn-filter"
                  onClick={() => setOrders(orderStateWithDate)}
                >
                  Filtrar
                </button>
              </div>
            </div>
          </div>
          <div className="typesfilters">
            <input
              className="inputfilter"
              type="text"
              placeholder="search client"
              onChange={handleFilterClient}
            />
          </div>
        </div>
        <DataTable
          value={orders}
          selectionMode="single"
          cellSelection
          onSelectionChange={(e) => setSelectedProduct(e.value)}
          dataKey="id"
          onCellSelect={onCellSelect}
          selection={selectedProduct}
          paginator
          rows={10}
        >
          <Column field="id" header="Order N°"></Column>
          <Column field="date" header="Date"></Column>
          <Column field="user.name" header="Client"></Column>
          <Column
            field="state"
            header="State"
            body={statusBodyTemplate}
            editor={(props) => statusEditor("products3", props)}
          ></Column>
          <Column field="method.description" header="Payment" className="paymentMethod"></Column>
          <Column field="total" header="Total $"></Column>
        </DataTable>
        <Link to={`/admin/order/${nrorders}`}>
          <div className="buttonseemorecontainer">
            <div className="titleView">
              <p>View detail Order N° {nrorders}</p>
            </div>
          </div>
        </Link>
        <div className="compoEditOrder">
          <Route path="/admin/order/:id" component={EditOrder} />
        </div>
      </div>
    </div>
  );
};

export default ModifyOrder;
