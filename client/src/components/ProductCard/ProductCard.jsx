/* eslint-disable  */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/_productCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/actionFront";
import { addToCartUser, removeToCartUser } from "../../redux/actions/actionOrder"

function ProductCard(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.auth.currentUser)
  const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder)
  
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const {
    data: { name, author, preview, id, price },
  } = props;

  const handleAddToCart = (productOnClick, currentUser, currentOrder) => {
    if(currentUser.id){
      let total=0;
      shoppingCart.forEach(product => {
        total += product.price ? Number(product.price) : 0
      })
      total = total + Number(productOnClick.price)
      dispatch(addToCartUser(productOnClick, currentUser, currentOrder, total))
    } else {
      let data = JSON.parse(localStorage.getItem("orderProducts")) || [];
      let found = data.filter((product) => product.id === productOnClick.id);
  
      if (found.length === 0) {
        data.push(productOnClick);
        localStorage.setItem("orderProducts", JSON.stringify(data));
        dispatch(addToCart(productOnClick));
      }
    }
  };

  const handleRemoveFromCart = (productOnClick, currentUser, currentOrder) => {
    if(currentUser.id){
      let total=0;
      shoppingCart.forEach(product => {
        total += product.price ? Number(product.price) : 0
      })
      total = total - Number(productOnClick.price)
      dispatch(removeToCartUser(productOnClick, currentUser, currentOrder, total))
      
    } else {
      let data = JSON.parse(localStorage.getItem("orderProducts"));
      let found = data.filter((product) => product.id !== productOnClick.id);
  
      localStorage.setItem("orderProducts", JSON.stringify(found));
      dispatch(removeFromCart(productOnClick));
    }
  };

  let lStorage;
  if ( shoppingCart.length !== 0) {
    if (shoppingCart.filter((prod) => prod.id === id).length === 1) {
      lStorage = true;
    }
  }

  return (
    <>
      <div className="product-card">
        <div className="shopping">
              <div className="price">
                <b>$ {price} </b>
              </div>
          {!lStorage ? (
            <i
              className="fas fa-cart-plus add"
              key={id}
              onClick={() => handleAddToCart(props.data, currentUser, currentOrder)}
            ></i>
          ) : (
            <i
              className="fas fa-cart-arrow-down remove"
              key={id}
              onClick={() => handleRemoveFromCart(props.data, currentUser, currentOrder)}
            >
              <br/>
            </i>
          )}

        </div>
          <Link className="link" to={`/product/${id}`}>
              <img src={preview} alt={name} />
          </Link>
          <div className="conten">
            <div className="nameAutor">
              <h4>{name}</h4>
              <h6>{author.name}</h6>
            </div>
          </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    preview: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;
