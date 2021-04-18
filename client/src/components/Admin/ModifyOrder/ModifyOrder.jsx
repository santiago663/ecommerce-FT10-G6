/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditOrder from './EditOrder/EditOrder';
import '../../../scss/components/_modifyOrder.scss';

const ModifyOrder = () => {

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
                                    <Link to={`/Admin/Order/Edit/${m.id}`}>
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
                <Route exact path="/Admin/Order/Edit/:id" component={EditOrder} />
            </div>
        </div>
    );
}
 
export default ModifyOrder;