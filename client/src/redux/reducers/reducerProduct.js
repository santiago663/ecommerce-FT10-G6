/*eslint-disable*/

import * as TYPES from '../types/index';
import * as TYPESUP from '../types/typesUpgrade';

const initialState = {
	backUpProducts: [],
	productCache: [],
	allProductCache: [],
	
};

export default function reducerProduct(state = initialState, action) {
	switch (action.type) {

		case TYPESUP.UPGRADE_EDIT_PRODUCT:
			return {
				...state,
				allProductCache: action.payload,
				
			};

		case TYPES.GET_ALL_PRODUCTS:
		case TYPES.SET_SEARCH_PRODUCTS:
			return {
				...state,
				allProductCache: action.payload,
				backUpProducts: action.payload,
			};

		case TYPES.GET_ONE_PRODUCT:
			return {
				...state,
				productCache: action.payload,
			};
		case TYPES.ORDER_ASC_NAME:
			return {
				...state,
				allProductCache: action.payload.productsOrder,
				arderBy: action.payload.name,
			};
		case TYPES.ORDER_DESC_NAME:
			return {
				...state,
				allProductCache: action.payload.productsOrder,
				orderBy: action.payload.name,
			};
		case TYPES.ORDER_BY_CATEGORIES:
			return {
				...state,
				allProductCache: action.payload.productCategory,
				filterBy: action.payload.category,
			};
		case TYPES.ALL_PRODUCTS_RESET:
			return {
				...state,
				allProductCache: state.backUpProducts,
			};
		default:
			return state;
	}
}
