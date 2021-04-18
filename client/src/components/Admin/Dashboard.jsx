/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/_dashboard.scss';
import { Route } from 'react-router-dom';
import ModifyProduct from './ModifyProduct/ModifyProduct';
import ModifyCategory from './ModifyCategory/ModyfyCategory.jsx';
import ModifyAuthor from './ModifyAuthor/ModifyAuthor.jsx';
import ModifyOrder from './ModifyOrder/ModifyOrder';

const Dashboard = () => {

    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))

    return (
        <div className='Dashboard'>
            <div className="adminconsole">
                <div className="imgProfile">

                </div>
                <div className='userAdmin'>
                    <h3>{currentUser.name}</h3>
                    <h4>{currentUser.email}</h4>
                </div>
                <div className='options-menu'>
                    <div className="option">
                        <Link className="nav-link" to="/admin/Product"><li>Products</li></Link>
                    </div>
                    <div className="option">
                    <Link className="nav-link" to="/admin/Category"><li>Categories</li></Link>
                    </div>
                    <div className="option">
                    <Link className="nav-link" to="/admin/Author"><li>Authors</li></Link>
                    </div>       
                </div>
            </div>
            <div className="rigthContainer">
                <div className="rightCointainerTop">
<div className="stats"></div>
<div className="scroll"></div>
                </div>
                <div className="rightContainerBottom">
                    <Route path="/Admin/Product" component={ModifyProduct} />
                    <Route path="/Admin/Category" component={ModifyCategory} />
                    <Route path="/Admin/Author" component={ModifyAuthor} />
                    <Route path="/Admin/Order" component={ModifyOrder} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;