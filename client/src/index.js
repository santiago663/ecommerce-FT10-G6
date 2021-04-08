import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { App, appReducer } from './app';

/* eslint-disable import/prefer-default-export */
export const store = createStore(appReducer, applyMiddleware(thunk));

function Stage() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Stage />
  </React.StrictMode>,
  document.getElementById('root'),
);
