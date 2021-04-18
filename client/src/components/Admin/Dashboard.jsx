/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/_dashboard.scss';
import { Route } from 'react-router-dom';
import ModifyProduct from './ModifyProduct/ModifyProduct';
import ModifyCategory from './ModifyCategory/ModyfyCategory.jsx';
import ModifyAuthor from './ModifyAuthor/ModifyAuthor.jsx';
import ModifyOrder from './ModifyOrder/ModifyOrder';
import ModifyUser from './ModifyUser/ModifyUser';

const Dashboard = () => {
    return ( 
        <div className='Dashboard'>
            <div className="adminconsole">
                <div className='UserAdmin'>
                    <h4>NameAdmin</h4>
                    <h4>RolAdmin</h4>
                    <h4>ImageAdmin</h4>
                    <h4>currentDay</h4>
                </div>
                <div className='compCreateEditDelete'>
                    <Link className="nav-link" to="/admin/Product"><li>Products</li></Link>
                    <Link className="nav-link" to="/admin/Category"><li>Categories</li></Link>
                    <Link className="nav-link" to="/admin/Author"><li>Authors</li></Link>
                    <Link className="nav-link" to="/admin/Order"><li>Orders</li></Link>
                    <Link className="nav-link" to="/admin/User"><li>Users</li></Link>
                </div>
            </div>
            <div className="rigthContainer">
                {/* <div className="rightCointainerTop">

                </div> */}
                <div className="rightContainerBottom">
                    <Route path="/Admin/Product" component={ModifyProduct} />
                    <Route path="/Admin/Category" component={ModifyCategory} />
                    <Route path="/Admin/Author" component={ModifyAuthor} />
                    <Route path="/Admin/Order" component={ModifyOrder} />
                    <Route path="/Admin/User" component={ModifyUser} />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;