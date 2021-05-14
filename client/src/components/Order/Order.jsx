/*eslint-disable*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PaypalButton from "../PaypalButton/PaypalButton";
import { loadStripe } from "@stripe/stripe-js";
import * as IoIcons from "react-icons/io"
import "./_order.scss";
import Swal from "sweetalert2";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE); //stripe connection


function Order() {
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
  let completed = JSON.parse(window.localStorage.getItem("completed"));
  const payments = useSelector((state) => state.payments);
  
  const reducer = (accumulator, currentValue) =>
    Number(currentValue.price) + accumulator;

  //mirar suma discount
  const sum = shoppingCart.reduce(reducer, 0);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  let data = JSON.parse(localStorage.getItem("orderProducts")) || [];
  //mirar pride discount
  const [input, setInput] = useState({
    name: "",
    email: "",
    productId: [...data].map((pi) => pi.id),
    price: [...data].map((p) => Number(p.price)),
    total: 0,
    payment: "",
    methodId: 0,
    ok: currentUser?.id ? true : false
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, ok: false
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(input.email)) {
      return Swal.fire({
        title: "Ops...",
        text: "Insert a valid email",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
    else if (!input.name) {
      return Swal.fire({
        title: "Ops...",
        text: "Name is missing",
        icon: "warning",
        confirmButtonText: "OK",
      })
    }
    else {
      setInput({ ...input, ok: true });
      localStorage.setItem("guestOrderDetails", JSON.stringify(input));
    }
  }

  // select payment
  const handlePayments = async (type, order, payment) => {
    localStorage.setItem("completed", JSON.stringify({ status: false, payment: true }));
    localStorage.setItem("guestOrderDetails", JSON.stringify(input));
    let user = JSON.parse(window.localStorage.getItem("CurrentUser"));
    let stripe = JSON.parse(window.localStorage.getItem("stripe"));
    try {
      if (/\S+@\S+\.\S+/.test(input.email)) {
        if (input.name !== "") {
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
        } else {
          Swal.fire({
            title: "Ops...",
            text: "el nombre no vacio",
            icon: "warning",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Ops...",
          text: "Digite un email valido",
          icon: "warning",
          confirmButtonText: "OK",
        })
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
            <div className="cartSteps">
              <span>1 <IoIcons.IoMdCheckmark className={input.ok ? "checkContactInfo" : "checkContactInfoHide"} /> Contact information</span>
              <span className={input.ok ? "spanPayment" : "spanPaymentGrey"}>2 <IoIcons.IoMdCheckmark className={completed?.status ? "checkPayment" : "checkPaymentHide"} />
              Payment method</span>
            </div>
            <br />
            <br />
            <div className="Information-form">
              {currentUser.id ? (
                <div className="name-email__container">
                  <div className="name__container">
                    <div className="order_Inputs"><span className="span_order">Name:</span></div>
                    <div className="order_Inputs"><input className="input_order"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={(input.name = currentUser.name)}
                      onChange={handleInputChange}
                    /></div>
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
                <form className="contactInfoForm">
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
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <button className="contactInfoButton" type="submit" onClick={handleSubmit}>Continue</button>
                  </div>
                </form>
              )}
            </div>
            <br></br>
            <br></br>
            <div className="Information-buttons">
              <div className="Information-next">
                {input.ok ?
                  <div className="Pay-methods" disabled>
                    <PaypalButton input={input} />
                    <button
                      className="stripe"
                      onClick={() => handlePayments("stripe")}
                    >
                      Stripe
                </button>
                  </div>
                  :
                  <span className="insertValidData">Please insert a valid email and a name</span>}
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
              Total Price : <span>${sum}</span>
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
