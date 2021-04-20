/*eslint-disable*/
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../redux/actions/actionBack";
import { addToCart, removeFromCart } from "../../redux/actions/actionFront";
import { addToCartUser,removeToCartUser } from "../../redux/actions/actionOrder";
import "../../scss/components/_productDetails.scss";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector(
    (store) => store.reducerOrderUser.currentOrder
  );
  const shoppingCart = useSelector(
    (state) => state.reducerShoppingCart.shoppingCart
  );
  const productCache = useSelector(
    (store) => store.reducerProduct.productCache
  );

  let {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    seriesId,
    author,
    categories,
  } = productCache;
  if (available) {
    available = "Available";
  } else {
    available = "Not Available";
  }

  const handleAddToCart = (productOnClick, currentUser, currentOrder) => {
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach((product) => {
        total += product.price ? Number(product.price) : 0;
      });
      total = total + Number(productOnClick.price);
      dispatch(addToCartUser(productOnClick, currentUser, currentOrder, total));
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

  let lStorage;
  if (shoppingCart.length !== 0) {
    console.log('si entre por aca')
    if (shoppingCart.filter((prod) => prod.id === productCache.id).length === 1) {
      lStorage = true;
    }
  }

  return (
    <div className="product-wrapper">
      <div className="product-preview">
        <img className="preview" src={preview} alt={name} />
      </div>
      <div className="detailProd">
        <div className="titulo">{name}</div>
        <div className="det">
          <h3>Description:</h3>
          <div className="desc">
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="det">
          <h3>Artista:</h3>
          <div className="desc">
            <h4>{author?.name}</h4>
          </div>
        </div>
        <div className="det">
          <h3>Categories:</h3>
          <div className="desc">
            {categories?.map((cate) =><span>{cate.name} / </span>)}
          </div>
        </div>
        <div className="dispre">
          <div className="det">
            <h3>Estado:</h3>
            <div className="desc">
              {available}
            </div>
          </div>
          <div className="det">
            <h3>Price:</h3>
            <div className="desc">
              {price}
            </div>
          </div>
        </div>
        <div className="contecarrito">
          <div className="btncarrito">
            {!lStorage ? (
              <button
                className="fas fa-cart-plus add btn"
                key={productCache.id}
                onClick={() =>
                  handleAddToCart(productCache, currentUser, currentOrder)
                }
              >ADD</button>
            ) : (
              <button
                className="fas fa-cart-arrow-down remove btn"
                key={productCache.id}
                onClick={() =>
                  handleRemoveFromCart(productCache, currentUser, currentOrder)
                }
              >
              REMOVE</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
