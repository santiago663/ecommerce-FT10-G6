/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {

  allOrders: [],
  allUsers: [],
};

export default function reducerOrderUser (state = initialState, action){

  switch (action.type) {

    case TYPES.GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };

    case TYPES.GET_ALL_USERS:
    return {
        ...state,
        allUsers: action.payload,
    };
  
    default:
      return state;
  }
};