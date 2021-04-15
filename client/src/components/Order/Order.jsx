/*eslint-disable*/
import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';

const Order = () => {
	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Contact Information</h2>
				</div>
				<div className="Information-form">
					<form>
						<input type="text" placeholder="Name" name="name" />
						<input type="text" placeholder="Email" name="Email" />
						<input type="text" placeholder="Address" name="address" />
						<input type="text" placeholder="Apto" name="apto" />
						<input type="text" placeholder="City" name="city" />
						<input type="text" placeholder="Country" name="country" />
						<input type="text" placeholder="CP" name="cp" />
						<input type="text" placeholder="Phone" name="phone" />
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to="/Browser/products" className="Information-Back">
							keep looking
						</Link>
					</div>
					<div className="Information-next">
						<Link to="/checkout/payment" className="Information-Back">
							To Pay
						</Link>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$10</span>
					</div>
					<br />
				</div>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$300</span>
					</div>
					<br />
				</div>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$10</span>
					</div>
					<br />
				</div>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$100</span>
					</div>
					<br />
				</div>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$40</span>
					</div>
					<br />
				</div>
				<div className="Information-item">
					<div className="Information-element">
						<h4>ITEM Name</h4>
						<span>$200</span>
					</div>
					<br />
				</div>
			</div>
		</div>
	);
};

export default Order;
