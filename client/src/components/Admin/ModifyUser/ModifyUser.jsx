/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { editUser, deleteUserAction } from '../../../redux/actions/actionBack';
import '../../../scss/components/_modifyOrder.scss';
import './_tablaUser.scss'

const ModifyUser = () => {

    let allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const allRoles = useSelector((store) => store.reducerRoles.allRoles)
    const dispatch = useDispatch();
    const dt = useRef(null);
    
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

   const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', 'custom');
        setSelectedDate(e.value);
    }

    const onStatusChange = (e) => {
        dt.current.filter(e.value, 'status', 'equals');
        setSelectedStatus(e.value);
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img alt="flag" src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (allUsers) => {
        return (
            <React.Fragment>
                <img className="profileUser" alt={allUsers.name} src={allUsers.profilePic} onError={(e) => e.target.src='No_se_si_funciona'} width={50} style={{verticalAlign: 'middle'}} />
          </React.Fragment>
        );
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }
    const deleteUser = (user)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `The Delete to ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUserAction(user.id))
                // setBoolean(true)
                Swal.fire(
                    'Deleted!',
                    'this User is deleted',
                    'success'
                )
            } else {
             
            }
        })
    }
    const deleteUserTemplate = (user) => {
        return (
            <React.Fragment>
                <button className="btnDelete" onClick={()=> deleteUser(user)}>Delete</button>
            </React.Fragment>
        );
    }
    const stateBodyTemplate = (user) => {
        return (
            <React.Fragment>
                {user.available ? <span>True</span> : <span>False</span>}
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            List of Users
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    const onCellSelect = (event) => {
        //alert("onCellSelect " + event.rowData.id + " " + event.rowData.name)
        //setSelectedUser(event.rowData.name)
    }
    const onRowSelect = (event) => {
        alert(event.name)
    }
    function handleInputChange(event) {
        
        if (selectedUser && event.target.value > 0){
            setSelectedUser({...selectedUser,["roleId"] : Number(event.target.value)})
            let rol = event.target.options[event.target.selectedIndex].text;
            Swal.fire({
                title: `Do you want to save the changes in User ${selectedUser.name}?`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Save`,
                denyButtonText: `Don't save`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    dispatch( editUser(selectedUser.id, selectedUser) );
                  allUsers = {...allUsers, [event.target.name]:event.target.value, ["role"]: rol }
                  Swal.fire('Saved!', '', 'success')
                  event.target.value = 0
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                  event.target.value = 0
                }
              })
        }else{
            Swal.fire('Select a User')
            event.target.value = 0
        }
    }
    const dateFilter = <Calendar value={selectedDate} onChange={onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
    const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={onStatusChange} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

    return ( 
        <div className='ModifyUser'>
             <div className="FilterAndProducts">
                <div className="datatable-filter-demo">
                    <div className="card">
                        <DataTable ref={dt} value={allUsers} paginator rows={6} 
                            header={header} selectionMode="single" cellSelection selection={selectedUser} onRowSelect={onRowSelect} onSelectionChange={(e)=> setSelectedUser(e.value.rowData)} dataKey="id" className="p-datatable-customers"
                            globalFilter={globalFilter} onCellSelect={onCellSelect} emptyMessage="No customers found.">
                            <Column field="profilePic" header="Perfil" className="picPerfil" body={representativeBodyTemplate} />
                            <Column field="name" header="Name" className
                            ="colNameUser" filter filterPlaceholder="Search by name" />
                            <Column field="email" header="E-mail" className="mailUser" filter filterPlaceholder="Seach by E-mail" />
                            <Column field="phone_Number" header="Phone" className="Phone" filter filterPlaceholder="Search by Phone" />
                            <Column field="role.description" header="Rol" className="RolUser" filter filterPlaceholder="Search by Rol" />
                            <Column field="available" header="Available" body={stateBodyTemplate} className="stateUser" filter filterPlaceholder="Search by State" />
                            <Column field="" header="Delete" body={deleteUserTemplate} className="colDeleteUser" />
                        </DataTable>
                    </div>
                </div>
                <div className="selectRol">
                    <h3 className="title">SELECT NEW ROLE FOR <br/> {selectedUser?.name}</h3>
                        <select 
                            required
                            className="selector"
                            name="roleId" 
                            id="selectorAvEP" 
                            onChange={handleInputChange}
                        >
                            <option value="0">
                            Select a Rol
                            </option>
                                {allRoles.map(a => <option name={a.description} key={a.id} value={a.id}>{a.description}
                            </option>)}
                        </select>
                    </div>
            </div>
        </div>
    );
}
export default ModifyUser;