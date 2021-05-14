import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/_productCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/actionFront";
import { addToCartUser, removeToCartUser } from "../../redux/actions/actionOrder"
import { putUserWhislist, deleteUserWhislist } from "../../redux/actions/actionWishlist"
import * as AiIcons from "react-icons/ai"
import { useState, useEffect } from "react";
import FunctionStar from "../FunctionStar/FunctionStar"

function ProductCard(props) {
  const dispatch = useDispatch();

  const currentUser = useSelector((store) => store.auth.currentUser)
  const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder)
  const allScores = useSelector((store) => store.reducerProduct.allProductsScores)
  const allUserProducts = useSelector((store) => store.reducerOrderUser.allUserProducts)
  const userWishlist = useSelector((store) => store.reducerWishlist.wishlist)
  const currentPage = useSelector((store) => store.reducerPagination.currentPage)

  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);

  const {
    data: {
      name,
      author,
      preview,
      id,
      price,
      available,
      score,
      stock,
      initialStock,
      discount
    },
  } = props;

  let objProduct = {
    name,
    author,
    preview,
    id,
    price,
    available,
    score,
    stock,
    initialStock,
    discount
  };
  let priceDiscpunt = 0;

  if( discount !== null){

    priceDiscpunt = price - (price * Number(discount.percent)) / 100;
    objProduct.price = priceDiscpunt;
  }

  let backScores = allScores?.find(scores => scores.id === id)
  const canBuy = allUserProducts.filter(product => product.id === id)
  const [canAdd, setCanAdd] = useState(false)

  useEffect(() => {
    if (userWishlist?.id) {
      setCanAdd(userWishlist?.products?.filter(product => product.id === id))
    }
  }, [userWishlist, currentPage, id])


  const handleAddToCart = (productOnClick, currentUser, currentOrder) => {
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach(product => {
  
        total += productOnClick.price ? Number(productOnClick.price) : 0
        
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
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach(product => {

        total += productOnClick.price ? Number(productOnClick.price) : 0
        
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

  const handleAddWishlist = (e) => {
    e.preventDefault()
    dispatch(putUserWhislist({ userId: currentUser.id, productId: [id] }))

  }

  const handleDeleteWishlist = (e) => {
    e.preventDefault()
    dispatch(deleteUserWhislist({ userId: currentUser.id, productId: id }))

  }

  let lStorage;
  if (shoppingCart.length !== 0) {
    if (shoppingCart.filter((prod) => prod.id === id).length === 1) {
      lStorage = true;
    }
  }


  return (
    <>
      <div className="product-card">
        {available === true ? (
          <div className="shopping">
            <div className="price">
              {discount !== null ? (
                <>
                  <div>
                    <b>${objProduct.price}</b>
                    <br />
                    <b className="strikethrough">$ {price}</b>
                  </div>
                </>

              ) : <b>${price} </b>}
            </div>
            <div>
              {canBuy[0] ? (
                <span className="acquiredPC">Acquired</span>
              ) : false || !lStorage ? (
                <i
                  className="fas fa-cart-plus add"
                  key={id}
                  onClick={() => handleAddToCart(objProduct, currentUser, currentOrder)}
                ></i>
              ) : (
                <i
                  className="fas fa-cart-arrow-down remove"
                  key={id}
                  onClick={() => handleRemoveFromCart(objProduct, currentUser, currentOrder)}
                >
                  <br />
                </i>
              )}
            </div>
          </div>
        ) : null}
        <Link className="link" to={`/product/${id}`}>
          <img src={preview} alt={name} />
        </Link>
        <div className="contenInfo">
          <div className="conten">
            <div className="nameAutor">
              {discount && <div className="divDiscountProd-wrap">
                <div className="divDiscountProd">
                  <span className="percentDiscountProd">
                    {discount !== null ? (`-${discount.percent}%`) : null}
                  </span>
                </div>
              </div>}
              <span className="scoreCard">
                {score?.score || backScores?.score ? score?.score || backScores?.score : '-'}{' '}
                {score === null ? FunctionStar(0) : FunctionStar(Number(score))}
              </span>
              {currentUser?.id && (
                <div className="wishlistHeartCard">
                  {canAdd && canAdd[0] ? (
                    <span onClick={handleDeleteWishlist}>
                      <AiIcons.AiFillHeart />
                    </span>
                  ) : (
                    <span className="wishlistHeartOutLineCard" onClick={handleAddWishlist}>
                      <AiIcons.AiOutlineHeart />
                    </span>
                  )}
                </div>
              )}
              <h4 className="nameProductCard">{name}</h4>
            </div>
          </div>
          <div>
            {stock ? (
              <span className="stockProductCard">
                Edition of {initialStock} - <span className="stockNumberPC">{stock}</span> left
              </span>
            ) : (
              <h6>{author.name}</h6>
            )}
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
