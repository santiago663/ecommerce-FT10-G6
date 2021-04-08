import React from 'react';
import { /* BrowserRouter as Router, Switch, */ Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import Component from '../modules/components/Component/Component';

import './App.styl';

function App() {
  return (
    <>
      <Route path="/" component={Component} />
    </>
  );
}

export default App;
