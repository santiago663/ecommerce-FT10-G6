import React from 'react';
import { /* BrowserRouter as Router, Switch, */ Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import Component from '../modules/components/Component/Component';
import Catalogue from "../modules/components/Component/Catalogue"

import './App.styl';

function App() {
  return (
    <>
      <Route path="/" component={Component} />
      <Route path="/" component={Catalogue} />
    </>
  );
}

export default App;
