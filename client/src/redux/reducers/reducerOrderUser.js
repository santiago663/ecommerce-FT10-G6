/*eslint-disable*/

import * as TYPES from '../types/index';
import * as TYPESUP from '../types/typesUpgrade';

const initialState = {
  currentOrder: [],
  allOrders: [],
  allUsers: [],
  userOrders: [],
  allUserProducts: [],
};

export default function reducerOrderUser(state = initialState, action) {

  switch (action.type) {

    case TYPES.GET_CURRENT_ORDER: {
      return {
        ...state,
        currentOrder: [action.payload]
      }

    }

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

    case TYPESUP.UPGRADE_EDIT_USER:      
      return {
        ...state,
        allUsers: action.payload,
      };

    case TYPES.GET_ALL_USER_ORDERS:      
      return {
        ...state,
        userOrders: action.payload,
      };

    case TYPES.ALL_USER_PRODUCTS: 
      return {
        ...state,
        allUserProducts: action.payload
      }

    default:
      return state;
  }
};