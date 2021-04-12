import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Browse from '../components/Browse/Browse';
// import Product from '../components/Product/Product';
import Admin from '../components/Admin/Admin';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const routes = () => (
  <Router>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/browse" component={Browse} />
    <Route path="/admin" component={Admin} />
    <Route path="/product/:id" component={ProductDetails} />
  </Router>
);

export default routes;
