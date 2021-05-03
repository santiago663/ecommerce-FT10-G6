/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Link, Route } from 'react-router-dom';
import EditUsers from './EditUsers/EditUsers';
import '../../../scss/components/_modifyOrder.scss';
import './tablaUser.scss'
import { Profiler } from 'react';

const ModifyUser = () => {

    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const [customers, setCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    
    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    
    // useEffect(() => {
        // customerService.getCustomersLarge().then(data => setCustomers(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const filterDate = (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    }

    const formatDate = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    const onRepresentativesChange = (e) => {
        dt.current.filter(e.value, 'representative.name', 'in');
        setSelectedRepresentative(e.value);
    }

    const onDateChange = (e) => {
        dt.current.filter(e.value, 'date', 'custom');
        setSelectedDate(e.value);
    }

    const onStatusChange = (e) => {
        dt.current.filter(e.value, 'status', 'equals');
        setSelectedStatus(e.value);
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
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

    const dateBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    const activityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`showcase/demo/images/avatar/${option.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{verticalAlign: 'middle'}} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
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

    const dateFilter = <Calendar value={selectedDate} onChange={onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date"/>;
    const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={onStatusChange} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;

    return ( 
        <div className='ModifyProduct'>
             <div className="FilterAndProducts">
                <div className='authorFilter'>
                </div>
                <div className="datatable-filter-demo">
                    <div className="card">
                        <DataTable ref={dt} value={allUsers} paginator rows={6}
                            header={header} className="p-datatable-customers"
                            globalFilter={globalFilter} emptyMessage="No customers found.">
                            <Column field="profilePic" header="Perfil" id="id" className="picPerfil" body={representativeBodyTemplate} />
                            <Column field="name" header="Name" className
                            ="colNameUser" filter filterPlaceholder="Search by name" />
                            <Column field="email" header="E-mail" className="mailUser" filter filterPlaceholder="Seach by E-mail" />
                            <Column field="phone_Number" header="Rol" className="Phone" filter filterPlaceholder="Search by Phone" />
                            <Column field="role.description" header="Rol" className="RolUser" filter filterPlaceholder="Search by Rol" />
                            <Column field="available" header="State" className="stateUser" filter filterPlaceholder="Search by State" />
                            {/* <Column field="country" filterField="country.name" header="Country" body={countryBodyTemplate} filter filterPlaceholder="Search by country" filterMatchMode="contains" /> */}
                            {/* <Column field="date" header="Date" body={dateBodyTemplate} filter filterElement={dateFilter} filterFunction={filterDate} /> */}
                        </DataTable>
                    </div>
                </div>
            </div>
                <div className="productContainer">
                    {allUsers.length !==0 && allUsers.length !==0 
                    ?<ul>
                        {allUsers.length !== 0 && allUsers.map(m => {
                            return(
                                <li className="product" key={m.id}>
                                    <Link to={`/Admin/User/Edit/${m.id}`}>
                                        <h3>•{m.email}</h3>
                                        <h4>{m.name}</h4>
                                    </Link> 
                                </li>           
                            )
                        })}
                    </ul>
                    
                    : null
                    }
                </div>
                
            <div className='compProd'>
                {/* <Route exact path="/Admin/Order" component={EditOrder} /> */}
                <Route exact path="/Admin/User/Edit/:id" component={EditUsers} />
            </div>
        </div>
    );
}
export default ModifyUser;