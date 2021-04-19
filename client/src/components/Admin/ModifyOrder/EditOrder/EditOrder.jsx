/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import '../../../../scss/components/_editProducts.scss';
import '../../../../scss/components/_editOrder.scss';

function EditProduct() {

    const {id} = useParams();

    const [order, setOrder] = useState([])

    const allOrders = useSelector((store) => store.reducerOrderUser.allOrders)
    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)

    useEffect(() => {

        if(id){
            const findOrder = allOrders.filter(f => f.userId === Number(id))

            if(findOrder.length !== 0){
              setOrder(findOrder)  
            }
        }
        return
        
    }, [id])

    return (
        <div className="order">
            <div className="box">
                <div className="everyOrders">
                    {order.length !== 0 
                    ? <div className="dateUser">
                        <h3 className="user">Usuer ID: {order[0].user.id}</h3>
                        <h3 className="user">User Name: {order[0].user.name}</h3>
                    </div>
                    : <div className="dateUser">
                        <h3 className="user">Usuer ID: </h3>
                        <h3 className="user">User Name: </h3>
                    </div>
                    }
                    <div className="listOrders">
                        <div className="dateOrders">
                            {order.length !== 0 && order.map(m => (
                            
                            <div className="products">
                                <div className="order">
                                    <h4 className="orderID" >OrderID: {m.id}</h4>
                                    <h4 className="orderID">Estado: -<h4 className={m.state}> {m.state}</h4></h4>
                                </div>    
                                {m.products.length !== 0 && m.products.map(n => (
                                <div className="oneProduct">

                                    <div className="dateProducts">
                                        <div className="Product">
                                            <h4 className="date">Product: {n.name}</h4>
                                        </div>
                                        <div className="Product">
                                            <h4 className="date">AuthorID: {n.authorId}</h4>  
                                        </div>
                                        <div className="Product">
                                            <h4 className="date">Price: ${n.price}</h4>
                                        </div>
                                        <br/>
                                        <div className="Product">
                                            <h4 className="date">Image: {n.fileLink}</h4>
                                        </div>
                                    </div>
                                </div>
                                ))}

                                <div className="TOTAL">
                                    <h4 className="totalPrice">TOTAL PRICE: {m.total}</h4> 
                                </div>
              
                            </div>
                           
                            ))}
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default EditProduct