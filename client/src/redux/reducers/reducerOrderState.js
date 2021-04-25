/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
  allOrderState: [],
};

export default function reducerOrderState (state = initialState, action){

  switch (action.type) {
    case "TYPES.GET_ALL_ORDERS_STATE":
      return {
        ...state,
        allOrderState: action.payload,
      };

    default:
      return state;
  }
};