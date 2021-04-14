/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
  productsPerPage: 9,
  currentPage:1,

};

export default function reducerPagination (state = initialState, action){

  switch (action.type) {

    case 'PAG':
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};