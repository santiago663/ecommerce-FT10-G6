/*eslint-disable*/
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PaypalButton from "../PaypalButton/PaypalButton";
import { loadStripe } from "@stripe/stripe-js";
import "./_order.scss";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE); //stripe connection

function Order() {
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const payments = useSelector((state) => state.payments);
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
    payment: "",
    methodId: 0,
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // select payment
  const handlePayments = async (type, order, payment) => {
    let user = JSON.parse(window.localStorage.getItem("CurrentUser"));
    // let MercadoPago = JSON.parse(window.localStorage.getItem("MercadoPago"));
    let stripe = JSON.parse(window.localStorage.getItem("stripe"));
    try {
      //logged user and open order
      if (user && currentOrder.length > 0) {
        if (type === "mercado-pago") {
          // window.location.href = MercadoPago.url;
        } else if (type === "stripe") {
          const stripeResponse = await stripePromise;
          const result = await stripeResponse.redirectToCheckout({
            sessionId: stripe.id,
          });
        }
        //guest user
      } else {
        if (type === "mercado-pago") {
          // window.location.href = MercadoPago.url;
        } else if (type === "stripe") {
          const stripeResponse = await stripePromise;
          const result = await stripeResponse.redirectToCheckout({
            sessionId: stripe.id,
          });
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // verify info in the state or localStorage
  if (
    // payments.mercadoPago.url &&
    payments.stripe.id ||
    // (JSON.parse(window.localStorage.getItem("mercadoPago")) &&
    JSON.parse(window.localStorage.getItem("stripe")) ||
    !JSON.parse(window.localStorage.getItem("CurrentUser"))
  ) {
    return (
      <div className="Information">
        <div className="order-form">
          <div className="Information-content">
            <div className="Info-Back__container">
              <Link to="/Browser/products" className="Information-Back">
                keep looking art
              </Link>
            </div>
            <div className="Information-head">
              {currentUser.id ? (
                <h2>
                  Please <span className="User-Name">{currentUser.name}</span>
                  {", "}
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
                <PaypalButton input={input} />
                <button
                  className="stripe"
                  onClick={() => handlePayments("stripe")}
                >
                  Stripe
                </button>
                {/* <button
                  className="mercadolibreee"
                  onClick={(e) => handlePayments("mercado-pago")}
                >
                  Mercado pago
                </button> */}
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
            <h3>
              Total Price : <span>{sum}</span>
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Information">
        <div className="order-form">LOADING...</div>
      </div>
    );
  }
}

export default Order;
