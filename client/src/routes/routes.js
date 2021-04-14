
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
// import Product from '../components/Product/Product';

const routes = () => (
  <Router>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/browser" component={Browser} />
    <Route path="/admin" component={Admin} />
  	<Route path="/checkout" component={Checkout} />
    <Route path="/product/:id" component={ProductDetails} />
    <Route path="/signin" component={SignIn} />
  </Router>
);

export default routes;
