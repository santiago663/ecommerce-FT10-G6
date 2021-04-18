/* eslint-disable  */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/components/_productCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, localStorageCart } from '../../redux/actions/actionFront';

function ProductCard(props) {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const {
		data: { name, author, preview, id },
	} = props;

	const local = []
  // for(var i = 0; i < 40 ; i++ ){
    
    local.push(localStorage.getItem(i))
    }
  

	useEffect(() => {

   
    if (local !== null && shoppingCart.length === 0) {
      
      if (!shoppingCart.includes(JSON.parse(local))) {

				dispatch(addToCart(JSON.parse(local)));
			}
		}
    // localStorage.clear()
	}, []);

	const handleAddToCart = (productOnClick) => {
		
		dispatch(addToCart(productOnClick));
		localStorage.setItem(productOnClick.id, JSON.stringify(productOnClick));
	};

	const handleRemoveFromCart = (productOnClick) => {
		
		dispatch(removeFromCart(productOnClick));
		localStorage.removeItem(productOnClick.id);
	};

	return (
		<>
			<Link className="link" to={`/product/${id}`}>
				<div className="product-card">
					<img src={preview} alt="" />
					<h4>{name}</h4>
					<h6>{author.name}</h6>
				</div>
			</Link>
			{shoppingCart && !shoppingCart.includes(props.data) ? (
				<i className="fas fa-cart-plus add" key={id} onClick={() => handleAddToCart(props.data)}></i>
			) : (
				<i className="fas fa-shopping-cart remove" key={id} onClick={() => handleRemoveFromCart(props.data)}>
					<br />
				</i>
			)}
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
