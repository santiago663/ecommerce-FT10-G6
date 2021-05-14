import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actionFront";
import { editProductStock } from "../../redux/actions/actionStock-Review";
import { removeToCartUser } from "../../redux/actions/actionOrder";
import { formUserOrder, formGuestOrder } from "../../redux/actions/actionOrder";
import { stripe } from "../../redux/actions/payments";
import {
  cleanShoopingCart,
  sendEmailOrderSuccess,
} from "../../redux/actions/actionFront.js";
import Swal from "sweetalert2";
import "./_checkout.scss";
// import Slider from '../Carousel/Slider'

const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );

  const userOrderProducts = { product: [], stock: [] };
  shoppingCart?.map((product) => {
    return (
      userOrderProducts.product.push(product.id),
      userOrderProducts.stock.push(product.stock)
    );
  });

  // Verificando el estado del pago
  useEffect(() => {
    let guestOrder = JSON.parse(localStorage.getItem("guestOrderDetails"));
    console.log(guestOrder, 1)
    let guestProducts = JSON.parse(localStorage.getItem("orderProducts"));
    console.log(guestProducts, 2)
    const loggedUser = JSON.parse(window.localStorage.getItem("CurrentUser"));
    const beforeOrder = JSON.parse(localStorage.getItem("beforeOrder"));
    const query = new URLSearchParams(window.location.search);
    const stripe = JSON.parse(window.localStorage.getItem("stripe"));

    // logged user
    if (query.get("success")) {
      if (loggedUser && beforeOrder.id) {
        localStorage.setItem("completed", JSON.stringify({ status: true }));
        dispatch(
          editProductStock({
            ...beforeOrder.products,
            stock: beforeOrder.products.stock.map((stock) =>
              stock == null ? null : stock - 1
            ),
          })
        );
        dispatch(
          formUserOrder({
            id: beforeOrder.id,
            state: "completed",
            payment: stripe.id,
            methodId: 4,
          })
        );

        Swal.fire({
          title: "Thanks for your purchase!",
          text:
            "Download links and additional data will be sent to the registered email",
          icon: "success",
          confirmButtonText: "OK",
        })
          .then(() =>
            dispatch(
              sendEmailOrderSuccess({
                name: loggedUser.name,
                orderId: beforeOrder.id,
                email: loggedUser.email,
                state: "completed",
              })
            )
          )
          .then(
            () =>
              window.localStorage.setItem("beforeOrder", JSON.stringify("")),
            localStorage.setItem("completed", JSON.stringify(""))
          )
          .then(() => window.localStorage.setItem("stripe", JSON.stringify("")))
          .then(() => window.location.assign("/browser/products"));
      } else {
        localStorage.setItem("completed", JSON.stringify({ status: true }));
        dispatch(
          editProductStock({
            product: guestProducts.map((product) => product.id),
            stock: guestProducts.map((product) =>
              product.stock == null ? null : product.stock - 1
            ),
          })
        );
        Swal.fire({
          title: "Thanks for your purchase!",
          text: "Download links and additional data will be sent to the email",
          icon: "success",
          confirmButtonText: "OK",
        })
          .then(
            dispatch(

              formGuestOrder({
                name: guestOrder.name,
                email: guestOrder.email,
                productId: guestOrder.productId,
                price: guestOrder.price,
                total: guestOrder.total,
                payment: stripe.id,
                methodId: 4,
              })
            )
          )
          .then(() => {
            return (guestOrder = JSON.parse(
              localStorage.getItem("guestOrderDetails")
            ));
          })
          .then(() =>
            dispatch(
              sendEmailOrderSuccess({
                name: guestOrder.name,
                orderId: guestOrder.orderId,
                email: guestOrder.email,
                state: "completed",
              })
            )
          )
          .then(() => window.location.assign("/browser/products"))
          .then(() => {
            localStorage.setItem("orderProducts", JSON.stringify(""));
            localStorage.setItem("guestOrderDetails", JSON.stringify(""));
            localStorage.setItem("completed", JSON.stringify(""));
          })
          .then(() => dispatch(cleanShoopingCart()));
      }
    } else if (query.get("canceled")) {
      if (loggedUser && beforeOrder.id) {
        dispatch(
          formUserOrder({
            id: beforeOrder.id,
            state: "cancelled",
            payment: "",
            methodId: "",
          })
        );
        Swal.fire({
          title: "Declined",
          text: `Did you decline the payment? If you need additional information or help, write to us. 
          It will be a pleasure to assist you.`,
          icon: "warning",
          confirmButtonText: "OK",
        }).then(() => history.push("/user/orders"));
      } else {
        Swal.fire({
          title: "Declined",
          text:
            "Did you decline the payment? If you need additional information or help, write to us. It will be a pleasure to assist you",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
		(currentValue.discountPrice ? Number(currentValue.discountPrice) : Number(currentValue.price)) + accumulator;
    const sum = shoppingCart.reduce(reducer, 0);
    return sum;
  };

  //remove items
  const handleRemoveFromCart = (productOnClick, currentUser, currentOrder) => {
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach((product) => {

        total += productOnClick.price ? Number(productOnClick.price) : 0;
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

  // button pay
  const handleClickPay = () => {
    let lStorage = JSON.parse(localStorage.getItem("CurrentUser"));
    let lsProducts = JSON.parse(localStorage.getItem("orderProducts"));
    if (currentOrder.length > 0 && lStorage.id) {
      currentOrder[0].products = userOrderProducts;
      localStorage.setItem("beforeOrder", JSON.stringify(currentOrder[0]));
      // dispatch(mercadoPago(currentOrder[0].id));
      dispatch(stripe({ orderId: currentOrder[0].id }));
      history.push("/checkout/information");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Ops... ",
        text: "Do you want to continue without an account?",
        showCloseButton: true,
        showCancelButton: true,
        showDenyButton: true,
        cancelButtonText: `OMG!, I want to register`,
        confirmButtonText: `Sing in`,
        denyButtonText: `Yes, It's OK`,
      }).then((result) => {
        if (result.isDenied) {
          dispatch(stripe({ products: lsProducts }));
          history.push("/checkout/information");
        } else if (result.isDismissed) {
          history.push("/register");
        } else if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  };

  return (
    <>
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
                      <img src={item.preview} alt="preview" width="100" />
                      <div className="price-item">
                        <h4>{item.name}</h4>
                        <div className="price-item__checkout">
                          ${item.price}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromCart(
                              item,
                              currentUser,
                              currentOrder
                            )
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
            <>
              <div>
                <h3>You dont have items pending</h3>
              </div>
              <br />
            </>
          )}
        </div>
        {/* <Slider props={false} /> */}
      </div>
    </>
  );
};

export default Checkout;
