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
	score:false,
	productReview: [],
	allProductsScores: [],
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
				score:false,
			};

		case TYPES.GET_PRODUCT_REVIEW:
			return { ...state, productReview: action.payload };

		case TYPES.ALL_PRODUCTS_SCORES:
			return { ...state, allProductsScores: action.payload };

		case 'ORDER_STARS':
			if (action.payload === "starUp") {

				if (state.author || state.categorie) {

					let arr = state.allProductCache.sort(function (o1, o2) {
						
							if ((o1.score === null ? 0.1 : Number(o1.score)) > (o2.score === null ? 0.1 : Number(o2.score))) {
								return -1;
							} else if (
								(o1.score === null ? 0.1 : Number(o1.score)) < (o2.score === null ? 0.1 : Number(o2.score))
							) {
								return 1;
							}
						
						return 0;
					});
					return {
						...state,
						allProductCache: arr,
						author: !!state.author ? false : true,
						categorie: !!state.author ? false : true,
						score: !state.score,
					};
				}else{
					let arr = state.backUpProducts.sort(function (o1, o2) {
						if (Number(o1.score) > Number(o2.score)) {
							return -1;
						} else if (Number(o1.score) < Number(o2.score)) {
							return 1;
						}
						return 0;
					});
					return { ...state, allProductCache: arr.filter((x) => x.score !== null), score: true };
				}

			
			} if (action.payload === 'starDown') {
				
				if(state.author || state.categorie){
					let arr = state.allProductCache.sort(function (o1, o2) {
						if ((o1?.score === null ? 0 : Number(o1?.score)) > (o2.score === null ? 0 : Number(o2.score))) {
							return 1;
						} else if (
							(o1.score === null ? 0 : Number(o1.score)) < (o2.score === null ? 0 : Number(o2.score))
						) {
							return -1;
						}

						return 0;
					});

					return {
						...state,
						allProductCache: arr,
						author: !!state.author ? false : true,
						categorie: !!state.author ? false : true,
						score: !state.score,
					};
				}else{
					let arr = state.backUpProducts.sort(function (o1, o2) {
						if (o1?.score > o2?.score) {
							return 1;
						} else if (o1?.score < o2?.score) {
							return -1;
						}
						return 0;
					});

					return { ...state, allProductCache: arr.filter((x) => x.score !== null), score: true};
				}
			}
			case 'CANTS_STARS':
				if(action.payload >= 5.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  5)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if(action.payload >= 4.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  4)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if(action.payload >= 3.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  3)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if(action.payload >= 3.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  3)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if(action.payload >= 2.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  2)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if(action.payload >= 1.0){
					let result = []
					state.backUpProducts.forEach((c) => {
						if(Number(c.score) ===  1)return result.push(c)
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				
		default:
			return state;
	}
}
