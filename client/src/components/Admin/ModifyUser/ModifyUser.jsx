/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditUsers from './EditUsers/EditUsers';
import '../../../scss/components/_modifyOrder.scss';

const ModifyUser = () => {

    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)

    return ( 
        <div className='ModifyProduct'>
             <div className="FilterAndProducts">
                <div className='authorFilter'>
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
            </div>
            <div className='compProd'>
                {/* <Route exact path="/Admin/Order" component={EditOrder} /> */}
                <Route exact path="/Admin/User/Edit/:id" component={EditUsers} />
            </div>
        </div>
    );
}
export default ModifyUser;