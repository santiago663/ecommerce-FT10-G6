/*eslint-disable*/

import * as TYPES from '../types/index';
import * as TYPESUP from '../types/typesUpgrade';

const initialState = {
	backUpProducts: [],
	productCache: [],
	allProductCache: [],
	authorDisponible: [],
	contegorieDisponible: [],
	author: false,
	categorie: false,
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
			if (state.author) {
				let filteredProducts = [];

				state.allProductCache.filter((f) =>
					f.categories.forEach((x) => {
						x.name === action.payload ? filteredProducts.push(f) : null;
					})
				);

				return {
					...state,
					allProductCache: filteredProducts,
					categorie: !state.categorie,
				};
			} else {
				let filteredProducts = [];
				let actualAuthor = [];

				state.backUpProducts.filter((f) =>
					f.categories.forEach((x) => (x.name === action.payload ? filteredProducts.push(f) : null))
				);
				filteredProducts.filter((f) => actualAuthor.push(f.author.name));

				return {
					...state,
					allProductCache: filteredProducts,
					categorie: true,
					authorDisponible: [...new Set((actualAuthor = [].concat.apply([], actualAuthor)))],
				};
			}
		case TYPES.ORDER_BY_AUTHOR:
			if (state.categorie) {
				let filteredProducts = [];
				state.allProductCache.filter((f) =>
					f.author.name === action.payload ? filteredProducts.push(f) : null
				);

				return {
					...state,
					allProductCache: filteredProducts,
					author: !state.author,
				};
			} else {
				let filteredProducts = [];
				let actualCategories = [];

				state.backUpProducts.filter((f) =>
					f.author.name === action.payload ? filteredProducts.push(f) : null
				);
				filteredProducts.forEach((f) => f.categories.filter((x) => actualCategories.push(x.name)));

				return {
					...state,
					allProductCache: filteredProducts,
					author: true,
					contegorieDisponible: [...new Set((actualCategories = [].concat.apply([], actualCategories)))],
				};
			}
		case TYPES.ALL_PRODUCTS_RESET:
			return {
				...state,
				allProductCache: state.backUpProducts,
				author: false,
				categories: false,
			};
		case TYPES.GET_ALL_FROM_BACKUP:
			return {
				...state,
				allProductCache: state.backUpProducts,
				author: false,
				categorie: false,
			};
		default:
			return state;
	}
}
