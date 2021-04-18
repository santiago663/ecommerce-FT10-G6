/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditOrder from './EditOrder/EditOrder';
import { getAllUsers } from '../../../redux/actions/actionBack';
import '../../../scss/components/_modifyOrder.scss';

const ModifyOrder = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      

        dispatch(getAllUsers());
    }, [])

    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const [input, setInput] = useState(0);

    let users = [];
    if(input !== 0){
        users = allUsers.filter(f => {
            if(f.author.id === Number(input) ){
                console.log(f.author.id)
                return f
            } 
        })
    }

    return ( 
        <div className='ModifyProduct'>
             <div className="FilterAndProducts">
                <div className='authorFilter'>
                    {/* <select 
                        name="authorId" 
                        id="selectorArAP" 
                        onChange={handleChange}
                    >
                        <option 
                            value="" 
                            disabled selected 
                        >Select User</option>    
                        {allUsers.length !==0 && allUsers.map(a => <option value={a.id}>{a.email}</option>)}
                    </select> */}
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