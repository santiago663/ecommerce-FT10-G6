/* eslint-disable  */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Browser from '../components/Browser/Browser';
// import Product from '../components/Product/Product';
import Admin from '../components/Admin/Admin';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Order/Order';
import Payment from '../components/Payment/Payment';

const routes = () => (
	<Router>
		<Route path="/" component={NavBar} />
		<Route exact path="/" component={Home} />
		<Route path="/browser" component={Browser} />
		<Route path="/admin" component={Admin} />
		<Route exact path="/checkout" component={Checkout} />
		<Route path="/checkout/payment" component={Payment} />
		<Route path="/checkout/information" component={Order} />
		<Route path="/product/:id" component={ProductDetails} />
	</Router>
);

export default routes;
