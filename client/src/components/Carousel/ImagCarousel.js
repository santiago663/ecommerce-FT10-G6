/* eslint-disable  */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/actionFront';
import { addToCartUser, removeToCartUser } from '../../redux/actions/actionOrder';

import './_slider.scss';

function imagCarousel({ src, id, products,props }) {
	
	const currentUser = useSelector((store) => store.auth.currentUser);
	const dispatch = useDispatch();
	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);

	const handleAddToCart = (productOnClick) => {
		if (currentUser.id) {
			dispatch(addToCartUser(productOnClick));
		} else {
			dispatch(addToCart(productOnClick));
		}
	};

	const handleRemoveFromCart = (productOnClick) => {
		if (currentUser.id) {
			dispatch(removeToCartUser(productOnClick));
		} else {
			dispatch(removeFromCart(productOnClick));
		}
	};

	let lStorage;
	if (shoppingCart.length !== 0) {
		if (shoppingCart.filter((prod) => prod.id === id).length === 1) {
			lStorage = true;
		}
	}

	

	return (
		<>
			{src === undefined ? (
				<img src={src} className="imgStyles" />
			) : (
				<>
					<h1 className="title-image">Novedad!</h1>
					<Link to={`/product/${id}`}>
						<img src={src} className={props.props ? "imgStylesInCheckout" : "imgStyles"} />
					</Link>

					{!lStorage ? (
						<i className="fas fa-cart-plus add" key={id} onClick={() => handleAddToCart(products)}></i>
					) : (
						<i
							className="fas fa-cart-arrow-down remove"
							key={id}
							onClick={() => handleRemoveFromCart(products)}
						>
							<br />
						</i>
					)}
					<div className="description-slider">
						<p>{products?.name} </p>
					</div>
				</>
			)}
		</>
	);
}

export default imagCarousel;
