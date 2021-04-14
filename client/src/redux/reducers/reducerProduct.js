/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {

  productCache: [],
  allProductCache: [],
};

export default function reducerProduct (state = initialState, action){

  switch (action.type) {

    case TYPES.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProductCache: action.payload,
      };

    case TYPES.GET_ONE_PRODUCT:
      return {
        ...state,
        productCache: action.payload,
      };

    default:
      return state;
  }
};

