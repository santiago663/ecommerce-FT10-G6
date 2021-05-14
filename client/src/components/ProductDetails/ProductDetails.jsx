/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductReview } from "../../redux/actions/actionStock-Review";
import { getOneProduct } from "../../redux/actions/actionProducts-Discounts"
import { addToCart, removeFromCart } from "../../redux/actions/actionFront";
import {
  addToCartUser,
  removeToCartUser,
} from "../../redux/actions/actionOrder";
import Loading from "../Loading/Loading";
import FunctionStar from "../FunctionStar/FunctionStar";
import Reviews from "../Reviews/Reviews.jsx";
import "../../scss/components/_productDetails.scss";
import { IoArrowUndoSharp } from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import {
  putUserWhislist,
  deleteUserWhislist,
} from "../../redux/actions/actionWishlist";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

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
  const allProduct = useSelector(
    (store) => store.reducerProduct.allProductCache
  );
  const loading = useSelector((store) => store.reducerLoading.loading);
  const productReview = useSelector(
    (store) => store.reducerProduct.productReview
  );
  const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
  const userWishlist = useSelector((store) => store.reducerWishlist.wishlist);

  const [productScore, setproductScore] = useState([0]);
  const [canAdd, setCanAdd] = useState(false);

  const completedUserOrder = userOrders.filter(
    (order) => order.state === "completed"
  );
  const canBuy = completedUserOrder.filter((order) =>
    order.products.find((product) => product.id == id)
  );

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getProductReview(id));
    setproductScore([allProduct.find((product) => product.id == id)?.score]);
  }, [allProduct.find((product) => product.id == id)?.score]);

  useEffect(() => {
    if (userWishlist?.id) {
      setCanAdd(userWishlist?.products?.filter((product) => product.id == id));
    }
  }, [userWishlist?.products?.length]);

  if (productCache.length !== 0) {
    var {
		name,
		description,
		price,
		available,
		preview,
		author,
		categories,
		stock,
		initialStock,
		discount,
	} = productCache;
    if (available) {
      available = "Available";
    } else {
      available = "Not Available";
    }
  }

  let objProduct = {
    name,
    author,
    preview,
    id,
    price,
    available,
    stock,
    initialStock,
    discount,
  };
  let priceDiscpunt = 0;

  if( typeof discount === "object" && discount !== null){

    priceDiscpunt = price - (price * Number(discount.percent)) / 100;
    objProduct.price = priceDiscpunt;
  }

  const handleAddToCart = (productOnClick, currentUser, currentOrder) => {
    if (currentUser.id) {
      let total = 0;
      shoppingCart.forEach((product) => {

        total += productOnClick.price ? Number(productOnClick.price) : 0;

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

        total += productOnClick.price ? Number(productOnClick.price) : 0;

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

  const addWish = (e) => {
    e.preventDefault();
    let userId = currentUser.id;
    dispatch(putUserWhislist({ userId: currentUser.id, productId: [id] }));
  };
  const deleteWish = (e) => {
    e.preventDefault();
    dispatch(deleteUserWhislist({ userId: currentUser.id, productId: id }));
  };

  let lStorage;
  if (shoppingCart.length !== 0) {
    if (
      shoppingCart.filter((prod) => prod.id === productCache.id).length === 1
    ) {
      lStorage = true;
    }
  }

  if (
    loading &&
    false &&
    !allProduct.find((product) => product.id == id)?.score
  ) {
    return <Loading />;
  } else {
    return (
		<div className="big-container">
			<div className="product-wrapper">
				<div className="product-preview">
					<img className="preview" src={preview} alt={name} />
				</div>
				<div className="detailProd">
					<div className="headerDet">
						<div className="score">
							{loading ? (
								<span> </span>
							) : (
								<span className="spanScore">
									{productScore[0]}
									<span> </span>
									<div className="divStars">{FunctionStar(Number(productScore[0]))}</div>
									<span> </span>
									<span className="reviewNumber">({productReview?.length})</span>
								</span>
							)}
						</div>
						<div className="wish_productDetail">
							{currentUser?.id && (
								<div className="wishlistHeartDetail">
									{canAdd && canAdd[0] ? (
										<span onClick={deleteWish}>
											<AiIcons.AiFillHeart />
										</span>
									) : (
										<span className="wishlistHeartOutLineDetail" onClick={addWish}>
											<AiIcons.AiOutlineHeart />
										</span>
									)}
								</div>
							)}
						</div>
						<div className="linkClose">
							<Link className="link" to="/Browser/products">
								<IoArrowUndoSharp />
							</Link>
						</div>
					</div>
					<div className="contDet">
						<div className="titulo">{name}</div>
						<div className="det">
							<h3>Categories:</h3>
							<div className="desc">
								{categories?.map((cate) => (
									<span>{cate.name} / </span>
								))}
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
							<div className="desc">{available}</div>
						</div>
						<div className="det">
							<h3>Price:</h3>
							<div className="desc">
								{discount ? (
									<>
										<p>{discount.percent}% Off</p>
										<p className="priceBeforeNowPD"><span className="spanPriceBeforePD">${price}</span> ${objProduct.price}</p> 
									</>
								) : (
									<b className="price-before">$ {price} </b>
								)}
							</div>
						</div>
					</div>
					{stock && (
						<div className="det">
							<h3>Limited Edition</h3>
							<span className="stockProductDetail">
								Edition of {initialStock} - <span className="stockNumberPD">{stock}</span> left
							</span>
						</div>
					)}
					<div className="contecarrito">
						{available === 'Available' ? (
							<div className="btncarrito">
								{canBuy[0] ? (
									<span className="acquiedPD">Acquired</span>
								) : false || !lStorage ? (
									<button
										className="fas fa-cart-plus add btn btn-Det espV"
										key={objProduct.id}
										onClick={() => handleAddToCart(objProduct, currentUser, currentOrder)}
									>
										&nbsp;ADD
									</button>
								) : (
									<button
										className="fas fa-cart-arrow-down remove btn btn-Det espR"
										key={objProduct.id}
										onClick={() => handleRemoveFromCart(objProduct, currentUser, currentOrder)}
									>
										&nbsp;DROP
									</button>
								)}
							</div>
						) : null}
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
