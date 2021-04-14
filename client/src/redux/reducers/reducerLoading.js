/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {

  loading: false,
};

export default function reducerLoading (state = initialState, action){

  switch (action.type) {

    case TYPES.REQUEST_DATA: // Setea el LOADING en TRUE
      return {
        ...state,
        loading: true
      }

    case TYPES.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
};