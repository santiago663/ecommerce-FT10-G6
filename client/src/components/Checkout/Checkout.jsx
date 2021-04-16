/* eslint-disable  */
import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actionFront';

const Checkout = () => {
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const dispatch = useDispatch()

	const handleSumTotal = ()=>{
		const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
		const sum = shoppingCart.reduce(reducer, 0);
		return sum;
	}

	return (
		<div className="Checkout">
			<div className="Checkout-conten">
				{shoppingCart.length > 0 ? <h3>Order List</h3> : <h3>Empty Shopping Cart</h3>}
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
										onClick={() => dispatch(removeFromCart(item))}
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
					<Link to="/checkout/information">
						<button type="button" className="btn-primary">
							Continue
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
