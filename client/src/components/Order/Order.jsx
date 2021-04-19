/*eslint-disable*/
import React, { useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Order = () => {
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	
	const [input, setInput] = useState({
		name: '',
		email: '',
		price: shoppingCart && shoppingCart.map((p) => {
			return Number(p.price);
		}),
		productId: shoppingCart && shoppingCart.map((pi) => {
			return pi.id;
		}),
		total: 0,
	});

	

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
		const sum = shoppingCart.reduce(reducer, 0);
		return sum
		
	};

	

	const onSubmit = (e) => {
		e.prevent.default();
		try {
			
			alert('Succes!')
		} catch (err) {
			console.error(err.mesagge);
		}
	};

	const handleInputChange = function (e) {
		
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	

	return (
		<div className="Information">
					<form onSubmit={onSubmit}>
			<div className="Information-content">
				<div className="Information-head">
					<h2>Contact Information</h2>
				</div>
				<div className="Information-form">
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={input.name}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={input.value}
							onChange={handleInputChange}
						/>
						<input  name="total" type="hidden" value={input.total = handleSumTotal()} onChange={handleInputChange} />
					</div>
					<div className="Information-buttons">
						<div className="Information-back">
							<Link to="/Browser/products" className="Information-Back">
								keep looking
							</Link>
						</div>
						<div className="Information-next">
							{/* <Link to="/checkout/payment"> */}
								<button value="To Pay" className="Information-Back" type="submit" >To Pay</button>
							{/* </Link> */}
						</div>
					</div>
				</div>
				<div className="Information-sidebar">
					<h3>Pedido:</h3>
					{shoppingCart &&
						shoppingCart.map((item) => {
							
							return (
								<div className="Information-item">
									
									<div className="Information-element">
										<h4>{item.name}</h4>

										<span>${item.price}</span>
									</div>
								</div>
							);
						})}
					<h4>{`Total Price : $ ${handleSumTotal()}`}</h4>
			</div>
				</form>
		</div>
	);
};

export default Order;
