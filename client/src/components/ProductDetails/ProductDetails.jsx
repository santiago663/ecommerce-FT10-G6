/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct, getProductReview, postUserReview } from "../../redux/actions/actionBack";
import { addToCart, removeFromCart, closeOnProductDetail } from "../../redux/actions/actionFront";
import { addToCartUser, removeToCartUser, getAllUserOrders } from "../../redux/actions/actionOrder";
import "../../scss/components/_productDetails.scss";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getProductReview(id))
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
  const productReview = useSelector(
    (store) => store.reducerProduct.productReview
  );
  const userOrders = useSelector(
    (store) => store.reducerOrderUser.userOrders
  );

  useEffect(() => {
    if (currentUser.id) dispatch(getAllUserOrders(currentUser.id))
  }, [currentUser.id]);

  //filtro por las ordenes completadas
  let completedUserOrder = userOrders.filter(order => order.state === "completed")

  //Verifico si puedo dejar un review
  let canReview = completedUserOrder.filter(order => order.products.find(product => product.id == id))
  if (productReview.find(review => review.userId == currentUser.id)) canReview = false


  //saco el promedio del score
  let score;
  if (productReview.map(review => review.score)[0]) {
    score = (productReview.map(review => review.score).reduce((a, b) => a + b) / productReview.length).toFixed(1)
  }

  //Add review
  const [review, setReview] = useState({ comment: "", score: 1 })

  function submitReview(event) {
    dispatch(postUserReview(id, currentUser.id, review))
  }

  function handleInputChangeSc(event) {
    event.preventDefault()
    setReview({ ...review, score: Number(event.target.value) })
  }

  function handleInputChangeCo(event) {
    event.preventDefault()
    setReview({ ...review, comment: event.target.value })
  }

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

  let key = 1

  return (
    <div className="big-container">
      <div className="product-wrapper">
        <div className="product-preview">
          <img className="preview" src={preview} alt={name} />
        </div>
        <div className="detailProd">
          <div className="linkClose">
            <Link className="link" to="/Browser/products">✘</Link>
          </div>
          <div className="score">
            <span>{score} <i className="far fa-star"></i></span>
          </div>
          <div className="titulo">{name}</div>
          <div className="det">
            <h3>Description:</h3>
            <div className="desc">
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="det">
            <h3>Author:</h3>
            <div className="desc">
              <h4>{author?.name}</h4>
            </div>
          </div>
          <div className="det">
            <h3>Categories:</h3>
            <div className="desc">
              {categories?.map((cate) => <span>{cate.name} / </span>)}
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
      <div className="review-cont">
        <div>
          <p className="reviewTitle">Reviews</p>
          {productReview[0] ? productReview.map(review =>
            <div className="reviewComment">
              <div>{review.score} <i className="far fa-star"></i></div>
              <div className="nameAndComment">{review.user.name}<p>{review.comment}</p></div>
            </div>
          )
        :
        <span className="noReviewsYet">No reviews yet  :(</span> 
        }
        </div>
        {canReview[0] ?
          <div className="add-review">
            <span>Add review</span>
            <div>
              <form>
                <div className="reviewForm">
                  <span className="spanAddReview">Score</span>  
                  <select name="score" id="reviewScoreSelector" onChange={handleInputChangeSc}>
                    {[1, 2, 3, 4, 5].map((x) => <option key={`PD${key++}`} value={x}>{x}</option>)}
                  </select>
                </div>
                <div className="divAddReview">
                  <span className="spanAddReview">Comment</span>
                  <textarea className="inputReviewComment" type="text" name="comment" onChange={handleInputChangeCo} />
                </div>
                <div className="divReviewButton">
                  <input className="inputSubmit" type="submit" value="Add" onClick={submitReview} />
                </div>
              </form>
            </div>
          </div>
          :
          <span></span>
        }
      </div>
    </div>

  );
}

export default ProductDetails;
