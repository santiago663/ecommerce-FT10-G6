/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formGuestOrder, formUserOrder } from "../../redux/actions/actionOrder";
import PaypalButton from "../PaypalButton/PaypalButton";
import "./_order.scss";

function Order() {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );

  const reducer = (accumulator, currentValue) =>
    Number(currentValue.price) + accumulator;
  const sum = shoppingCart.reduce(reducer, 0);
  let data = JSON.parse(localStorage.getItem("orderProducts")) || [];

  const [input, setInput] = useState({
    name: "",
    email: "",
    productId: [...data].map((pi) => pi.id),
    price: [...data].map((p) => Number(p.price)),
    total: sum,
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    if (currentUser.id) {
      try {
        let user = { id: currentOrder[0].id, state: "completed" };
        dispatch(formUserOrder(user));
        if (type === "MP") {
          let storage = JSON.parse(window.localStorage.getItem("mercadoPago"));
          window.location.href = storage.paymentUrl;
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        dispatch(formGuestOrder(input));
        alert("success !!");
        location.assign("http://localhost:3000/Browser/products");
        localStorage.clear();
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="Information">
      <form className="order-form">
        <div className="Information-content">
          <div className="Info-Back__container">
            <Link to="/Browser/products" className="Information-Back">
              keep looking art
              </Link>
          </div>
          <div className="Information-head">
            {currentUser.id ? (
              <h2>
                Please <span className="User-Name">{currentUser.name}</span>{", "}
                press pay to finalize the purchase{" "}
              </h2>
            ) : (
              <h2>Contact Information</h2>
            )}
          </div>
          <br />
          <br />
          <div className="Information-form">
            {currentUser.id ? (
              <div className="name-email__container">
                <div className="name__container">
                  <span>Name:</span>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={(input.name = currentUser.name)}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="email__container">
                  <span>E-mail:</span>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={(input.email = currentUser.email)}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="name-email__container">
                <div className="name__container">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="email__container">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={input.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}
          </div>
          <br></br>
          <br></br>
          <div className="Information-buttons">
            <div className="Information-next">
              <PaypalButton handleSubmit={handleSubmit} />
              <button className="mercadolibreee" onClick={(e) => handleSubmit(e, "MP")}>
                Mercado pago
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h2>Pedido:</h2>
          {shoppingCart &&
            shoppingCart.map((item) => {
              return (
                <div className="Information-item">
                  <div className="Information-element">
                    <h4>{item.name}</h4>
                    <span>${item.price}</span>
                  </div>
                </div>
              );
            })}
          <br />
          <h3>Total Price : <span>{sum}</span></h3>
        </div>
      </form>
    </div >
  );
}

export default Order;
