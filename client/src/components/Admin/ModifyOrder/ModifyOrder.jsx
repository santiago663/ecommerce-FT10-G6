/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Toast } from 'primereact/toast';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersState } from '../../../redux/actions/actionUpgrade'
import EditOrder from './EditOrder/EditOrder'
//import '../../../scss/components/_modifyOrder.scss';
import './OrdersEdit.scss';

const ModifyOrder = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const allOrders = useSelector((store) => store.reducerOrderUser.allOrders)
    const orderState = useSelector(store => store.reducerOrderState.allOrderState)
    const orderStateWithDate = orderState?.map((order) => {
        let createdAt;
       let createdDate;
       let createdTime;
   createdAt = new Date(order?.createdAt);
   createdDate = createdAt.toLocaleDateString("es-AR");
   createdTime = createdAt.toLocaleTimeString("es-AR");
   
   order.date = createdDate + " " + createdTime
   return order
   })
    const ordersWithDate = allOrders.map((order) => {
         let createdAt;
        let createdDate;
        let createdTime;
    createdAt = new Date(order?.createdAt);
    createdDate = createdAt.toLocaleDateString("es-AR");
    createdTime = createdAt.toLocaleTimeString("es-AR");
    
    order.date = createdDate + " " + createdTime
    return order
    })
    
    
    const [orders, setOrders] = useState([])
    const toast = useRef(null);
    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const [nrorders, setNrorders] = useState(0)
    useEffect(()=>{
        setOrders(ordersWithDate)
    },[])

    const onCellSelect = (event) => {
        //toast.current.show({ severity: 'info', summary: `Orders Selected`, detail: `${toCapitalize(event.field)}: ${event.value}`, life: 10000 });
        //console.log(event.value)
        setNrorders(event.value)
    }

    // const onCellUnselect = (event) => {
    //     toast.current.show({ severity: 'warn', summary: `Item Unselected In Product`, detail: `${toCapitalize(event.field)}: ${event.value}`, life: 10000 });
    //     console.log(event.value)
    // }
    
    // const toCapitalize = (str) => {
    //     console.log('Esto es',str.slice(1))
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // }

   
    
    const dispatch = useDispatch()
    const onChangeStatus = (e) => {
        dispatch(getAllOrdersState(e.target.value))
    }
    const handleFilterClient = (e)=>{
    const filter = allOrders.filter(user => user.user.name.toLowerCase().includes(e.target.value.toLowerCase()))    
    setOrders(filter)
    }
    const [products1, setProducts1] = useState(null);
    const [products2, setProducts2] = useState(null);
    const [products3, setProducts3] = useState(null);
    const [products4, setProducts4] = useState(null);
    const [editingRows, setEditingRows] = useState({});
    const [editingCellRows, setEditingCellRows] = useState([]);
    
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    let originalRows = {};
    let originalRows2 = {};

    const dataTableFuncMap = {
        'products1': setProducts1,
        'products2': setProducts2,
        'products3': setProducts3,
        'products4': setProducts4
    };
    const statuses = [
        { label: 'Open', value: 'open'},
        { label: 'Loading', value: 'loading'},
        { label: 'Pending', value: 'pending'},
        { label: 'Cancelled', value: 'cancelled'},
        { label: 'Completed', value: 'completed'}
    ];
    const onEditorValueChange = (productKey, props, value) => {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        dataTableFuncMap[`${productKey}`](updatedProducts);
    }
    const statusEditor = (productKey, props) => {
        return (
            <Dropdown value={props.rowData['state']} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => onEditorValueChange(productKey, props, e.value)} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }
    const getStatusLabel = (status) => {
        switch (status) {
            case 'open':
                return 'Open';

            case 'loading':
                return 'Loading';

            case 'pending':
                return 'Pending';
            
            case 'cancelled':
                return 'Cancelled';

            case 'completed':
                return 'Completed';

            default:
                return 'NA';
        }
    }
    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.state);
    }
    return ( 
        <div className='Orders'>
            <Toast ref={toast} />
            <div className="filterorders">
                <div className="typesfilters">
                    <button className="allOrders" onClick={()=>setOrders(allOrders)}>All Orders</button>
                </div>
                <div className="typesfilters">
                    <b>Filter Client</b>
                    <input className="inputfilter" type="text" placeholder="search client" onChange={handleFilterClient}/>
                </div>
                <div className="typesfilters">
                        <b>Filter State</b>
                    <div className="filterState">
                        <div className="containSelect">
                        <select className="selector" onChange={onChangeStatus}>
                            <option value="" disabled selected >Selected State</option>
                            <option value="open">Open</option>
                            <option value="loading">Loading</option>
                            <option value="pending">Pending</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                        </select>
                        </div>
                        <div>
                            <button className="btn-filter" onClick={()=>setOrders(orderStateWithDate)}>Filtrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <DataTable value={orders} selectionMode="multiple" cellSelection onSelectionChange={e => setSelectedProduct(e.value)} dataKey="id"
                    onCellSelect={onCellSelect} selection={selectedProduct}  paginator rows={10}>
                    <Column field="id" header="Order N°"></Column>
                    <Column field="date" header="Date"></Column>
                    <Column field="user.name" header="Client"></Column>
                    <Column field="state" header="State" body={statusBodyTemplate} editor={(props) => statusEditor('products3', props)}></Column>
                    <Column field="method.description" header="Payment"></Column>
                    <Column field="total" header="Total $"></Column>
             </DataTable>
            <Link to={`/admin/order/${nrorders}`}>
                <div className="titleView">
                    <h3>View detail Order N° {nrorders}</h3>
                </div> 
            </Link>
             <div className="compoEditOrder">
                 <Route path="/admin/order/:id" component={EditOrder} />
             </div>
        </div>
    );
}
 
export default ModifyOrder;