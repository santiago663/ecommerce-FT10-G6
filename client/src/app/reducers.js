import { combineReducers } from 'redux';

// import { exampleReducer } from '../modules/reducers/file';

const reducersToCombine = {
  // exampleReducer,
};

const appReducer = combineReducers(reducersToCombine);

export default appReducer;
