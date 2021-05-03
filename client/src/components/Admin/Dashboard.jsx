/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/_dashboard.scss';
import { Route } from 'react-router-dom';
import ModifyProduct from './ModifyProduct/FilterProductByAuthor';
import ModifyCategory from './ModifyCategory/ModyfyCategory.jsx';
import ModifyAuthor from './ModifyAuthor/ModifyAuthor.jsx';
import ModifyOrder from './ModifyOrder/ModifyOrder';
import ModifyUser from './ModifyUser/ModifyUser';
import AddProduct from './ModifyProduct/AddProduct/AddProduct'

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
    return ( 
       <div className='Dashboard'>
                <div className="maincontainer">
                    <Route exact path="/Admin/Product" component={AddProduct} />
                    <Route exact path="/Admin/Product/Edit/:id" component={AddProduct} />
                    <Route path="/Admin/Category" component={ModifyCategory} />
                    <Route path="/Admin/Author" component={ModifyAuthor} />
                    <Route path="/Admin/Order" component={ModifyOrder} />
                    <Route path="/Admin/User" component={ModifyUser} />
                </div>
        </div>
    );
}

export default Dashboard;

