/* eslint-disable  */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actionFront";
import { removeToCartUser } from "../../redux/actions/actionOrder";
import { formUserOrder } from "../../redux/actions/actionOrder";
import { mercadoPago, stripe } from "../../redux/actions/payments";
import Swal from "sweetalert2";
import "./_checkout.scss";

const Checkout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );

  // Verificando el estado del pago
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const stripe = JSON.parse(window.localStorage.getItem("stripe"));
    // logged user
    if (query.get("success") && currentOrder.length > 0) {
      dispatch(
        formUserOrder({
          id: currentOrder[0].id,
          state: "completed",
          payment: stripe.id,
          methodId: 4,
        })
      );
      history.push("/checkout");
      Swal.fire({
        title: "Thanks for your purchase!",
        text:
          "Download links and additional data will be sent to the registered email",
        icon: "success",
        confirmButtonText: "OK",
      })
        .then(() => window.localStorage.setItem("stripe", JSON.stringify("")))
        .then(() => history.push("/Browser/products"));
    } else if (query.get("canceled")) {
      Swal.fire({
        title: "Declined",
        text:
          "Did you decline the payment? If you need additional information or help, write to us. It will be a pleasure to assist you",
        icon: "warning",
        confirmButtonText: "OK",
      }).then(() => history.push("/checkout"));
    }
  }, [currentOrder]);

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      Number(currentValue.price) + accumulator;
    const sum = shoppingCart.reduce(reducer, 0);
    return sum;
  };

  const handleRemoveFromCart = (productOnClick, currentUser, currentOrder) => {
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach((product) => {
        total += product.price ? Number(product.price) : 0;
      });
      total = total - Number(productOnClick.price);
      dispatch(
        removeToCartUser(productOnClick, currentUser, currentOrder, total)
      );
    } else {
      let data = JSON.parse(localStorage.getItem("orderProducts"));
      let result = data.filter((product) => product.id !== productOnClick.id);

      localStorage.setItem("orderProducts", JSON.stringify(result));
      dispatch(removeFromCart(productOnClick));
    }
  };

  const handleClickPay = () => {
    if (currentOrder.length > 0) {
      dispatch(mercadoPago(currentOrder[0].id));
      dispatch(stripe(currentOrder[0].id));
      history.push("/checkout/information");
    } else {
      Swal.fire({
        icon: "info",
        title: "Great!!",
        text:
          "To continue the process you must be registered, so we can offer you more personalized functions.",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: `I want to register`,
        confirmButtonText: `I have an account`,
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        } else if (result.isDismissed) {
          history.push("/register");
        }
      });
    }
  };

  return (
    <div className="checkout-container">
      <div className="Checkout">
        <div className="Checkout-content">
          {shoppingCart.length > 0 ? (
            <h3>Order # {currentOrder[0]?.id}</h3>
          ) : (
            <h3>Empty Shopping Cart</h3>
          )}
          <div className="Checkout-item">
            {shoppingCart &&
              shoppingCart.map((item, i) => {
                return (
                  <div className="Checkout-element" key={i}>
                    <img src={item.preview} width="100" />
                    <div className="price-item">
                      <h4>{item.name}</h4>
                      <div className="price-item__checkout">${item.price}</div>
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveFromCart(item, currentUser, currentOrder)
                        }
                        className="Trash-item"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {shoppingCart && shoppingCart.length > 0 ? (
          <div className="Checkout-sidebar">
            <h3>
              Total Price : <span>${handleSumTotal()}</span>
            </h3>
            {/* <Link to="/checkout/information"> */}
            <button
              type="button"
              className="btn-primary"
              onClick={handleClickPay}
            >
              Pay
            </button>
            {/* </Link> */}
          </div>
        ) : (
          <div>
            <h3>You dont have items pending</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
