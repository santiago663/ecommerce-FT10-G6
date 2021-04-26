/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct, getProductReview } from "../../redux/actions/actionBack";
import { addToCart, removeFromCart } from "../../redux/actions/actionFront";
import { addToCartUser, removeToCartUser } from "../../redux/actions/actionOrder";
import Loading from "../Loading/Loading"
import Reviews from "../Reviews/Reviews.jsx"
import "../../scss/components/_productDetails.scss";
import { IoArrowUndoSharp } from 'react-icons/io5';

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentUser = useSelector((store) => store.auth.currentUser);
  const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
  const productCache = useSelector((store) => store.reducerProduct.productCache);
  const allProduct = useSelector((store) => store.reducerProduct.allProductCache);
  const loading = useSelector((store) => store.reducerLoading.loading)

  const [productScore, setproductScore] = useState([0])

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getProductReview(id))
    setproductScore([allProduct.find(product => product.id == id)?.score])
  }, [allProduct.find(product => product.id == id)?.score]);

  if (productCache.length !== 0) {
    var {
      name,
      description,
      price,
      available,
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
    if (shoppingCart.filter((prod) => prod.id === productCache.id).length === 1) {
      lStorage = true;
    }
  }


   if (loading && (false && !allProduct.find(product => product.id == id)?.score)) {
    return (
      <Loading />
    )
  }
  else {
    return (

      <div className="big-container">
        <div className="product-wrapper">
          <div className="product-preview">
            <img className="preview" src={preview} alt={name} />
          </div>
          <div className="detailProd">
            <div className="headerDet">
              <div className="score">
                <span>{score ? score : "-"} <i className="far fa-star"></i></span>
              </div>
              <div className="linkClose">
                <Link className="link" to="/Browser/products"><IoArrowUndoSharp/></Link>
              </div>
            </div>
            <div className="contDet">
              <div className="titulo">{name}</div>
              <div className="det">
                <h3>Categories:</h3>
                <div className="desc">
                  {categories?.map((cate) => <span>{cate.name} / </span>)}
                </div>
              </div>
              <div className="det">
                <h3>Author:</h3>
                <div className="desc">
                  <h4>{author?.name}</h4>
                </div>
              </div>
              <div className="det">
                <h3>Description:</h3>
                <div className="desc">
                  <p className="description">{description}</p>
                </div>
              </div>
            </div>
            <div className="dispre">
              <div className="det">
                <h3>Sale status:</h3>
                <div className="desc">
                  {available}
                </div>
              </div>
              <div className="det">
                <h3>Price:</h3>
                <div className="desc">
                 $ {price}
                </div>
              </div>
            </div>
            <div className="contecarrito">
              {available === "Available"
              ?
                <div className="btncarrito">
                  {!lStorage ?  (
                    <button
                      className="fas fa-cart-plus add btn btn-Det espV"
                      key={productCache.id}
                      onClick={() =>
                        handleAddToCart(productCache, currentUser, currentOrder)
                      }
                    >&nbsp;ADD</button>
                  ) : (
                    <button
                      className="fas fa-cart-arrow-down remove btn btn-Det espR"
                      key={productCache.id}
                      onClick={() =>
                        handleRemoveFromCart(productCache, currentUser, currentOrder)
                      }
                    >
                     &nbsp;DROP</button>
                  )}
                </div>
              :null
              }
            </div>
          </div>
        </div>
        <div className="cont-Review-Det">
          <div className="review-Det">
            <Reviews currentUser={currentUser} productId={id} />
          </div>    
        </div>
      </div>
    );
  }

}

export default ProductDetails;
