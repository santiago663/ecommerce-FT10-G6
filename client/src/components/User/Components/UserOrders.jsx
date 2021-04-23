/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserOrders } from '../../../redux/actions/actionOrder'
import '../../../scss/components/_userOrder.scss'

export default function UserOrders() {

    const dispatch = useDispatch();

    const currentUser = useSelector((store) => store.auth.currentUser)
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders)
    console.log(userOrders,"ordenes")

    const {id} = currentUser

    const [active, setActive ] = useState(null)

    useEffect(() => {
     
        dispatch(getAllUserOrders(id) )
    }, [])

    const handleActive = () =>{
        if(active === null) return setActive(1);
        else{
            setActive(null)
        }
    }

    return (
        <div className="order1">
            <div className="box1">
                <div className="everyOrders1">
                    <div className="listOrders1" onClick={handleActive}>
                        <div className="dateOrders1">
                            {userOrders.length !== 0 && userOrders.map(m => (
                            
                                <div className="products1">
                                    <div>
                                        <div className="order1" >
                                            <h4 className="orderID1" >OrderID: {m.id}</h4>
                                        </div>
                                        <div className="order1">
                                            <h4 className="orderID1">Estado: -<h4 className={m.state}> {m.state} </h4></h4>
                                        </div>
                                        <div className="order1">
                                            <h4 className="orderID1"> date: {m.date}</h4>
                                        </div>  
                                    </div>     
                                    {active ===1 && m.products.length !== 0 && m.products.map(n => (
                                        <div className="oneProduct1">
                                            <div className="dateProducts1">
                                                <div className="Product1">
                                                    <h4 className="date1">Product: {n.name}</h4>
                                                </div>
                                                <div className="Product1">
                                                    <h4 className="date1">AuthorID: {n.authorId}</h4>  
                                                </div>
                                                <div className="Product1">
                                                    <h4 className="date1">Price: ${n.price}</h4>
                                                </div>
                                            </div>
                                            <div className="imageProduct1">
                                                    <img 
                                                        src={n.preview} 
                                                        alt={n.name}
                                                        width="200"
                                                    />
                                                </div>
                                        </div>
                                    ))}
                                    <div className="TOTAL1">
                                        <h4 className="totalPrice1">TOTAL PRICE: {m.total}</h4> 
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )

}
