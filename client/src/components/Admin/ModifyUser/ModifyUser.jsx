/*eslint-disable*/
import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { editUser, deleteUserAction } from "../../../redux/actions/actionUsers-Roles";
import "../../../scss/components/_modifyOrder.scss";
import "./_tablaUser.scss";

const ModifyUser = () => {
  let allUsers = useSelector((store) => store.reducerOrderUser.allUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const allRoles = useSelector((store) => store.reducerRoles.allRoles);
  const dispatch = useDispatch();
  const dt = useRef(null);

  const representativeBodyTemplate = (allUsers) => {
    return (
      <React.Fragment>
        <img
          className="profileUser"
          alt={allUsers.name}
          src={allUsers.profilePic}
          onError={(e) => (e.target.src = "No_se_si_funciona")}
          width={50}
          style={{ verticalAlign: "middle" }}
        />
      </React.Fragment>
    );
  };

  const deleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `The Delete to ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {

        dispatch(deleteUserAction(user.id));

        Swal.fire("Deleted!", "this User is deleted", "success");
      } else {
      }
    });
  };
  const deleteUserTemplate = (user) => {
    return (
      <React.Fragment>
        <button className="btnDelete" onClick={() => deleteUser(user)}>
          Disable
        </button>
      </React.Fragment>
    );
  };
  const stateBodyTemplate = (user) => {
    return (
      <React.Fragment>
        {user.available ? <span>True</span> : <span>False</span>}
      </React.Fragment>
    );
  };

  const header = (
    <div className="table-header">
      List of Users
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
    </div>
  );

  const onCellSelect = (event) => {
    //alert("onCellSelect " + event.rowData.id + " " + event.rowData.name)
    //setSelectedUser(event.rowData.name)
  };
  const onRowSelect = (event) => {
    alert(event.name);
  };

  function handleInputChange(e) {
    e.preventDefault(e);
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: Number(e.target.value),
    });

    let rol = e.target.options[e.target.selectedIndex].text;
    console.log(rol);
  }

  function submitRol(event) {
    event.preventDefault();

    if (selectedUser) {

    console.log(selectedUser)

      Swal.fire({
        title: `Do you want to save the changes in User ${selectedUser.name}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log(selectedUser);
          dispatch(editUser(selectedUser.id, selectedUser));

          Swal.fire("Saved!", "", "success");
          event.target.value = 0;
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          event.target.value = 0;
        }
      });
    } else {
      Swal.fire("Select a User");
      event.target.value = 0;
    }
  }

  return (
    <div className="ModifyUser">
      <div className="FilterAndProducts">
        <div className="datatable-filter-demo">
          <div className="card">
            <DataTable
              ref={dt}
              value={allUsers}
              paginator
              rows={6}
              header={header}
              selectionMode="single"
              cellSelection
              selection={selectedUser}
              onRowSelect={onRowSelect}
              onSelectionChange={(e) => setSelectedUser(e.value.rowData)}
              dataKey="id"
              className="p-datatable-customers"
              globalFilter={globalFilter}
              onCellSelect={onCellSelect}
              emptyMessage="No customers found."
            >
              <Column
                field="profilePic"
                header="Perfil"
                className="picPerfil"
                body={representativeBodyTemplate}
              />
              <Column
                field="name"
                header="Name"
                className="colNameUser"
                filter
                filterPlaceholder="Search by name"
              />
              <Column
                field="email"
                header="E-mail"
                className="mailUser"
                filter
                filterPlaceholder="Seach by E-mail"
              />
              <Column
                field="phone_Number"
                header="Phone"
                className="Phone"
                filter
                filterPlaceholder="Search by Phone"
              />
              <Column
                field="role.description"
                header="Rol"
                className="RolUser"
                filter
                filterPlaceholder="Search by Rol"
              />
              <Column
                field="available"
                header="Available"
                body={stateBodyTemplate}
                className="stateUser"
                filter
                filterPlaceholder="Search by State"
              />
              <Column
                field=""
                header="Delete"
                body={deleteUserTemplate}
                className="colDeleteUser"
              />
            </DataTable>
          </div>
        </div>
        <div className="selectRol">
          <h3 className="title">
            SELECT NEW ROLE FOR <br /> {selectedUser?.name}
          </h3>

          <form onSubmit={submitRol}>
            <select
              required
              className="selector"
              name="roleId"
              id="selectorAvEP"
              onChange={handleInputChange}
            >
              <option value="0">Select a Rol</option>
              {allRoles.map((a) => (
                <option name={a.description} key={a.id} value={a.id}>
                  {a.description}
                </option>
              ))}
            </select>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyUser;
