/* eslint-disable  */
import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
	// const reducerShoppingCart = useSelector((state) => state.reducerShoppingCart);

	return (
		<div className="Checkout">
			<div className="Checkout-conten">
				<h3>Order List</h3>
				<div className="Checkout-item">
					<div className="Checkout-element">
						<h4>ITEM name</h4>
						<span>$10</span>
						<button type="button">
							<i class="fas fa-trash"></i>
						</button>
					</div>
				</div>
			</div>
			<div className="Checkout-sidebar">
				<h3>Total Price : $10</h3>
				<Link to="/checkout/information">
					<button type="button" className="btn-primary">
						Continue
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Checkout;
