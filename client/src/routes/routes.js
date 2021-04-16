/*eslint-disable*/

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Browser from '../components/Browser/Browser'
import Admin from '../components/Admin/Admin';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SignIn from '../components/Auth/SignIn';
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Order/Order';
import Payment from '../components/Payment/Payment';
import Register from '../components/Auth/Register';

const routes = () => (
  <Router>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/browser" component={Browser} />
    <Route path="/admin" component={Admin} />
  	<Route path="/checkout" component={Checkout} />
  	<Route path="/checkout/payment" component={Payment} />
		<Route exact path="/checkout/information" component={Order} />
    <Route path="/product/:id" component={ProductDetails} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
  </Router>
);

export default routes;
