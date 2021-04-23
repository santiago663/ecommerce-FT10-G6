/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formGuestOrder, formUserOrder } from '../../redux/actions/actionOrder';
import  PaypalButton  from '../PaypalButton/PaypalButton';
import './Order.css';

function Order() {
	const dispatch = useDispatch();
	const currentUser = useSelector((store) => store.auth.currentUser);
	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);

	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	const sum = shoppingCart.reduce(reducer, 0);
	let data = JSON.parse(localStorage.getItem('orderProducts')) || [];

	const [input, setInput] = useState({
		name: '',
		email: '',
		productId: [...data].map((pi) => pi.id),
		price: [...data].map((p) => Number(p.price)),
		total: sum,
	});

	const handleInputChange = function (e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	
	const handleSubmit = async (currentOrder) => {
		

		if (currentUser.id) {
			try {
				let user = { id: currentOrder[0].id, state: 'completed' };
				dispatch(formUserOrder(user));
				alert('success !!');

				location.assign('http://localhost:3000/Browser/products');
			} catch (err) {
				console.error(err.message);
			}
		} else {
			try {
				dispatch(formGuestOrder(input));
				alert('success !!');
				location.assign('http://localhost:3000/Browser/products');
				localStorage.clear();
			} catch (err) {
				console.error(err.message);
			}
		}
	};

	return (
		<div className="Information">
			<form onSubmit={(e) => handleSubmit(e, currentOrder)}>
				<div className="Information-content">
					<div className="Information-head">
						{currentUser.id ? (
							<h2>
								Please <span className="User-Name">{currentUser.name}</span> press pay to finalize the
								purchase{' '}
							</h2>
						) : (
							<h2>Contact Information</h2>
						)}
					</div>
					<br />
					<br />
					<div className="Information-form">
						{currentUser.id ? (
							<>
								<span>Name:</span>
								<input
									type="text"
									placeholder="Name"
									name="name"
									value={(input.name = currentUser.name)}
									onChange={handleInputChange}
								/>
								<span>E-mail:</span>
								<input
									type="text"
									placeholder="Email"
									name="email"
									value={(input.email = currentUser.email)}
									onChange={handleInputChange}
									required
								/>
							</>
						) : (
							<>
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
									value={input.email}
									onChange={handleInputChange}
									required
								/>
							</>
						)}
					</div>
					<br></br>
					<br></br>
					<div className="Information-buttons">
						<div className="Information-back">
							<Link to="/Browser/products" className="Information-Back">
								keep looking
							</Link>
						</div>
						<div className="Information-next">
							<PaypalButton handleSubmit={handleSubmit} />
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
					<br />
					<h2>Total Price : {sum}</h2>
				</div>
			</form>
		</div>
	);
}
export default Order;

