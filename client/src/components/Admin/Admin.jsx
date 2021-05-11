/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Dashboard'
import '../../scss/components/_admin.scss';
import { getAllUsers, getAllrRoles } from '../../redux/actions/actionUsers-Roles'
import { getAllOrders } from "../../redux/actions/actionOrder"

function Admin() {

  const dispatch = useDispatch();
  
  useEffect(() => {
 
    dispatch(getAllUsers());
    dispatch(getAllOrders());
    dispatch(getAllrRoles());

  }, []);

  return (
    <div className="Admin">
      <Dashboard />
    </div>
  );
}

export default Admin;
