/*eslint-disable*/

import * as TYPES from "../types/index";

const initialState = {

	currenUser: false,
	shoppingCart: [],
  

};

export default function reducerShoppingCart(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOAD_STORAGE_GUEST:
      return {
        ...state,
        shoppingCart: action.payload,
      };
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart].concat(action.payload),
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      case TYPES.CLEAN_SHOPPING_CART:
        return {
			...state,
			shoppingCart: [],
		};
    default:
      return state;
  }
}
