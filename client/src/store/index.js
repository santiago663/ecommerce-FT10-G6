/* eslint-disable */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
