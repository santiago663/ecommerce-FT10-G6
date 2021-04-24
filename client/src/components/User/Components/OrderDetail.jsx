/*eslint-disable*/
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as AiIcons from 'react-icons/ai';
import Loading from '../../Loading/Loading'
import Swal from 'sweetalert2'
import "../../../scss/components/_orderDetail.scss";

function OrderDetail() {
  const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
  const { id } = useParams();
  let order;
  if(userOrders.length > 0){
    order = userOrders.find((ord) => ord.id === Number(id));
    if(order === undefined){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          }).then((result) => {
            location.assign("http://localhost:3000/user/orders")
          })
    }
  }
  
  
  let createdAt;
  let createdDate;
  let createdTime;
  const setDate = (order) => {
    createdAt = new Date(order?.date);
    createdDate = createdAt.toLocaleDateString("en-US");
    createdTime = createdAt.toLocaleTimeString("en-US");
    return (
      <h4>
        {createdDate} at {createdTime}
      </h4>
    );
  };

  useEffect(() => {
     
  }, [userOrders])

  if(order === undefined ) {
      return ( <Loading/>)
  } else {
  return (
    <div className="orderdetail-container">
        
      <div className="modal">
      <div className="closeWindow">
          <Link to="/user/orders">
            <AiIcons.AiFillCloseCircle/>
            </Link>
        </div>
        <div className="modalheader">
          <div className="title">
            <h1>Order Detail</h1>
          </div>
        </div>
        <hr />
        <div className="modalbody">
          <div className="generalinfo">
              <div className="timeIcon">
            <AiIcons.AiOutlineFieldTime/>
              </div>
              <div className="timedata">
            {setDate(order)}
              </div>
          </div>
          <hr />
          <div className="productdetails">
              <div className="orderDetailTitle">
              <h2>DESCRIPTION</h2>
              </div>
            {order.products.map((n) => (
              <div className="description">
                <div className="productinfo">
                  <h4 className="pr1">{n.name}</h4>
                  <Link className="link" to={`/product/${n.id}`}>
                    <img src={n.preview} alt={n.name} width="50" height="50" background-size="cover" />
                  </Link>
                  <h4 className="pr1">${n.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr/>
        <div className="modalFooter">
            {order.state === "open" && <Link to="/checkout"><button className="buyit">Buy It!</button></Link>}            
            <div className="totalprice">
            <h2>TOTAL</h2>
            <h1>{order.total}</h1>
            </div>       
        </div>
      </div>
    </div>
  );
}
}

export default OrderDetail;
