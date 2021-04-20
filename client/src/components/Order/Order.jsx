// /*eslint-disable*/
// import React, { useState } from 'react';
// import './Order.css';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// // import {postOrderGuest} from '../../redux/actions/actionBack'

// const Order = () => {
//   const dispatch =useDispatch()
// 	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	
// 	const [input, setInput] = useState({
// 		name: '',
// 		email: '',
// 		price: shoppingCart && shoppingCart.map((p) => {
// 			return Number(p.price);
// 		}),
// 		productId: shoppingCart && shoppingCart.map((pi) => {
// 			return pi.id;
// 		}),
// 		total: 0,
// 	});

	

// 	const handleSumTotal = () => {
// 		const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
// 		const sum = shoppingCart.reduce(reducer, 0);
// 		return sum
		
// 	};

	

// 	const onSubmit = (e) => {
// 		e.prevent.default();
// 		try {
// 			dispatch(postOrderGuest(input))
			
// 		} catch (err) {
// 			console.error(err.mesagge);
// 		}
// 	};

// 	const handleInputChange = function (e) {
		
// 		setInput({
// 			...input,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

	

// 	return (
// 		<div className="Information">
// 					<form onSubmit={onSubmit}>
// 			<div className="Information-content">
// 				<div className="Information-head">
// 					<h2>Contact Information</h2>
// 				</div>
// 				<div className="Information-form">
// 						<input
// 							type="text"
// 							placeholder="Name"
// 							name="name"
// 							value={input.name}
// 							onChange={handleInputChange}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Email"
// 							name="email"
// 							value={input.value}
// 							onChange={handleInputChange}
// 						/>
// 						<input  name="total" type="hidden" value={input.total = handleSumTotal()} onChange={handleInputChange} />
// 					</div>
// 					<div className="Information-buttons">
// 						<div className="Information-back">
// 							<Link to="/Browser/products" className="Information-Back">
// 								keep looking
// 							</Link>
// 						</div>
// 						<div className="Information-next">
// 							{/* <Link to="/checkout/payment"> */}
// 								<button value="To Pay" className="Information-Back" type="submit" >To Pay</button>
// 							{/* </Link> */}
// 						</div>
// 					</div>
// 				</div>
// 				<div className="Information-sidebar">
// 					<h3>Pedido:</h3>
// 					{shoppingCart &&
// 						shoppingCart.map((item) => {
							
// 							return (
// 								<div className="Information-item">
									
// 									<div className="Information-element">
// 										<h4>{item.name}</h4>

// 										<span>${item.price}</span>
// 									</div>
// 								</div>
// 							);
// 						})}
// 					<h4>{`Total Price : $ ${handleSumTotal()}`}</h4>
// 			</div>
// 				</form>
// 		</div>
// 	);
// };

// export default Order;

/*eslint-disable*/
import React, { useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {formGuestOrder } from "../../redux/actions/actionOrder"

function Order () {

	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const dispatch = useDispatch();
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	const sum = shoppingCart.reduce(reducer,0)		

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
	
	const handleInputChange = function (e) {
		
		setInput({
			...input,
			[e.target.id]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = {
			name: input.name,
			email: input.email,
			price: input.price,
			productId: input.productId,
			total: sum,
		}
		dispatch(formGuestOrder(form))
		alert(input.name);
		localStorage.clear();

	};
	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Contact Information</h2>
				</div>
				<div className="Information-form">
					<form onSubmit={handleSubmit}>
						<input
						required 
						type="text"
						 placeholder="Name" 
						 name="name"
						 id="name"
						 onChange={handleInputChange}
						 value={input.name} 
						 />
						<input
						required 
						type="text"
						placeholder="Email"
						name="email"
						id= "email"
						onChange={handleInputChange}
						value={input.email}
						  />
						  <button type="submit">To Pay</button>
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to="/Browser/products" className="Information-Back">
							keep looking
						</Link>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
					{shoppingCart &&
						shoppingCart.map((item) => {
							return (
								<>
								<div className="Information-item">
									<div className="Information-element">
										<h4>{item.name}</h4>
										<span>${item.price}</span>
									</div>
				</div>
								</>
							);
						})}
						<h4>Total: {sum}</h4>
			</div>
		</div>
	)};
export default Order;