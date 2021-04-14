/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {

  allSeriesCache: [],
};

export default function reducerSeries (state = initialState, action){

  switch (action.type) {

    case TYPES.GET_ALL_SERIES:
      return {
        ...state,
        allSeriesCache: action.payload,
      };

    default:
      return state;
  }
};