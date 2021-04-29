/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
  productsPerPage: 20,
  currentPage:1,

};

export default function reducerPagination (state = initialState, action){

  switch (action.type) {

    case TYPES.PAG:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};