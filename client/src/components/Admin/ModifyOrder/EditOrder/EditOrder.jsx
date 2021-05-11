/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../../../scss/components/_editOrder.scss';
import { getDetailOrders, formUserOrder, getAllOrders } from "../../../../redux/actions/actionOrder";

function EditProduct() {
    const dispatch = useDispatch()

    const {id} = useParams();
    const [orderState, setOrderState] = useState([])

    const allOrders = useSelector((store) => store.reducerOrderUser.allOrders)
    const allUsers = useSelector((store) => store.reducerOrderUser.allUsers)
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
    const detailOrder = useSelector(store => store.reducerOrderState.detailOrder)
    const loading = useSelector((store) => store.reducerLoading.loading)

    useEffect(() => {

        if(id){
            // const findOrder = allOrders.filter(f => f.userId === Number(id))
            // if(findOrder.length !== 0){
            //   setOrder(findOrder)  
            // }
            dispatch(getDetailOrders(id))
            setOrderState(detailOrder[0]?.state)
        }
        // return
        
    }, [id])
    const handleChangeState = (e)=>{
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: `The Change State to ${e.target.value}` ,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(formUserOrder({
                    id:detailOrder[0]?.id,
                    state: e.target.value
                }))
                dispatch(getAllOrders())
              Swal.fire(
                'Change!',
                'this state is changed',
                'success'
              )
            }else{
                e.target.value=0;
            }
          })
    }
    
    return (
        <div className="order">
            <div className="box">
                <div className="everyOrders">
                                
                    <div className="listOrders">
                        <div className="dateOrders">
                                                        
                            <div className="products">
                                <div className="conteinOrders">
                                    <div>
                                        <h4 className="orderId" >OrderID: {detailOrder[0]?.id}</h4>
                                    </div>
                                    <div className="orderState">
                                        Estado: <h3 className={detailOrder[0]?.state}> {detailOrder[0]?.state}</h3>
                                        {/* Estado: {loading ? <h2></h2> : <h3 className={orderState}> {orderState}</h3>} */}
                                        {detailOrder[0]?.state === "open" || detailOrder[0]?.state === "loading" || detailOrder[0]?.state === "pending" ?
                                        <select onChange={handleChangeState}>
                                            <option value="0" disabled selected >Change State</option>
                                            <option value="cancelled">Cancelled</option>
                                            <option value="completed">Completed</option>
                                        </select>:null}
                                    </div>
                                </div>    
                                {detailOrder[0]?.products?.map(n => (
                                <div className="oneProduct">

                                    <div className="contentDetail">
                                        <div className="Product">
                                            <img src={n.fileLink} alt={n.name} width="50" height="50" className="date"/>
                                        </div>
                                        <div className="ContentNameProd">
                                            <h4 className="nameProd">Product: {n.name}</h4>
                                        </div>
                                        <div className="contentAuthor">
                                            <h4 className="nameAuthor">AuthorID: {n.authorId}</h4>  
                                        </div>
                                        <div className="contentPrice">
                                            <h4 className="priceProd">${n.price}</h4>
                                        </div>
                                    </div>
                                </div>
                                ))}

                                <div className="TOTAL">
                                    <h4 className="totalPrice">TOTAL ${detailOrder[0]?.total}</h4> 
                                </div>
              
                            </div>
                           
                            
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default EditProduct
