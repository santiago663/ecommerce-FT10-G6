/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
  allOrderState: [],
  detailOrder:[]
};

export default function reducerOrderState (state = initialState, action){

  switch (action.type) {
    case "TYPES.GET_ALL_ORDERS_STATE":
      return {
        ...state,
        allOrderState: action.payload,
      };
      case TYPES.GET_DETAIL_ORDER:
      return {
        ...state,
        detailOrder: action.payload,
      };

    default:
      return state;
  }
};