/* eslint-disable  */
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actionFront";
import { removeToCartUser } from "../../redux/actions/actionOrder";
import { createPreference } from "../../redux/actions/mercadoPago";

const Checkout = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );

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
      let found = data.filter((product) => product.id !== productOnClick.id);

      localStorage.setItem("orderProducts", JSON.stringify(found));
      dispatch(removeFromCart(productOnClick));
    }
  };

  const handleCreatePreference = (orderId) => {
    dispatch(createPreference(orderId));
  };

  return (
    <div className="Checkout">
      <div className="Checkout-conten">
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
                  <h4>{item.name}</h4>
                  <img src={item.preview} width="100" />
                  <span>${item.price}</span>
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
              );
            })}
        </div>
      </div>
      {shoppingCart && shoppingCart.length > 0 ? (
        <div className="Checkout-sidebar">
          <h3>{`Total Price : $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information" >
            <button
              type="button"
              className="btn-primary"
              onClick={() => handleCreatePreference(currentOrder[0]?.id)}
            >
              Pagar
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h3>You dont have a items pending</h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
