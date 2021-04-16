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

    case "FIL_ALPH":
      if(action.payload === 0){
        return {
          ...state,
          allProductCache: [...state.allProductCache].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        };
      } else {
        return {
          ...state,
          allProductCache: [...state.allProductCache].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        };
      }

    default:
      return state;
  }
};

