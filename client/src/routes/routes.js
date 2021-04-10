import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import Browse from '../components/Browse/Browse';

const routes = () => (
  <Router>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/browse" component={Browse} />
  </Router>
);

export default routes;
