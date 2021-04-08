import React from 'react';
import { /* BrowserRouter as Router, Switch, */ Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import Catalogue from '../modules/components/Catalogue/Catalogue';

import './App.styl';

function App() {
  return (
    <>
      <Route path="/" component={Catalogue} />
    </>
  );
}

export default App;
