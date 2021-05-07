/*eslint-disable*/

import * as TYPES from '../types/index';
import * as TYPESUP from '../types/typesUpgrade';

const initialState = {
	backUpProducts: [],
	productCache: [],
	allProductCache: [],
	authorDisponible: [],
	contegorieDisponible: [],
	categorieBackUp: [],
	authorBackUp: [],
	actualStars: [],
	author: false,
	categorie: false,
	score: false,
	productReview: [],
	newProductReviews: [],
	allProductsScores: [],
	editProductReviews: [],
	adminProducts:[],
};

export default function reducerProduct(state = initialState, action) {
	switch (action.type) {
		case TYPESUP.UPGRADE_EDIT_PRODUCT:
			return {
				...state,
				allProductCache: action.payload,
			};

		case TYPES.GET_ALL_PRODUCTS:
			return {
				...state,
				allProductCache: action.payload,
				backUpProducts: action.payload,
			};
		case TYPES.SET_SEARCH_PRODUCTS:
			
			let saveButNotRepeat = [...state.adminProducts].concat(action.payload)
			return {
				...state,
				allProductCache: action.payload,
				adminProducts: [...new Set((saveButNotRepeat = [].concat.apply([], saveButNotRepeat)))],
			};

		case TYPES.GET_ONE_PRODUCT:
			
			state.adminProducts.forEach((z) => {
				
					if (action.payload.id === z.id) {
						action.payload.discountPrice = z.discountPrice;
						action.payload.percent = z.discountPercent;
						action.payload.booleanDiscount = 'true';
						return{
							...state,
							productCache: action.payload,
						}
					}
				
			});
			return {
				...state,
				productCache: action.payload,
			};
		case TYPES.ORDER_ASC_NAME:
			return {
				...state,
				allProductCache: action.payload.productsOrder,
				adminProducts: action.payload.productsOrder,
				arderBy: action.payload.name,
			};
			case TYPES.ORDER_DESC_NAME:
				return {
					...state,
					allProductCache: action.payload.productsOrder,
					adminProducts: action.payload.productsOrder,
				orderBy: action.payload.name,
			};
		case TYPES.ORDER_BY_CATEGORIES:
			if (state.author ) {
				let filteredProducts = [];
				let actualStars = [];
				let actualAuthor = [];

				if (state.authorBackUp.length >= 1) {
					[...state.authorBackUp].filter((f) =>
						f.categories.forEach((x) => {
							x.name === action.payload
								? (filteredProducts.push(f),
								  actualAuthor.push(f.author.name),
								  actualStars.push(Math.floor(Number(f.score))))
								: null;
						})
					);
				} else {
					[...state.authorBackUp].filter((f) =>
						f.categories.forEach((x) => {
							x.name === action.payload
								? (filteredProducts.push(f),
								  actualAuthor.push(f.author.name),
								  actualStars.push(Math.floor(Number(f.score))))
								: null;
						})
					);
				}
				let noRepeat = [...state.adminProducts].concat(filteredProducts);
				return {
					...state,
					allProductCache: filteredProducts,
					adminProducts: [...new Set((noRepeat = [].concat.apply([], noRepeat)))],
					categorie: !state.categorie,
					actualStars: [...new Set((actualStars = [].concat.apply([], actualStars)))].sort(),
					authorDisponible: [...new Set((actualAuthor = [].concat.apply([], actualAuthor)))],
				};
			} else {
				let filteredProducts = [];
				let actualAuthor = [];
				let actualStars = [];

				[...state.backUpProducts].filter((f) =>
					f.categories.forEach((x) =>
						x.name === action.payload
							? (actualAuthor.push(f.author.name),
							  filteredProducts.push(f),
							  actualStars.push(Math.floor(Number(f.score))))
							: null
					)
				);
				let noRepeat = [...state.adminProducts].concat(filteredProducts)
					return {
						...state,
						allProductCache: filteredProducts,
						adminProducts: [...new Set((noRepeat = [].concat.apply([], noRepeat)))],
						categorie: action.admin ? false : true,
						authorDisponible: [...new Set((actualAuthor = [].concat.apply([], actualAuthor)))],
						actualStars: [...new Set((actualStars = [].concat.apply([], actualStars)))].sort(),
						categorieBackUp: filteredProducts,
					};
			}
		case TYPES.ORDER_BY_AUTHOR:
			if (action.payload === state.authorDisponible) {
				return {
					...state,
					allProductCache: state.allProductCache,
					contegorieDisponible: Empty,
				};
			}
			if (state.categorie) {
				let filteredProducts = [];
				let actualStars = [];
				let actualCategories = [];

				[...state.categorieBackUp].filter((f) =>
					f.author.name === action.payload
						? (filteredProducts.push(f), actualStars.push(Math.floor(Number(f.score))))
						: null
				);
				filteredProducts.forEach((f) => f.categories.filter((x) => actualCategories.push(x.name)));
				let noRepeat = [...state.adminProducts].concat(filteredProducts)
				return {
					...state,
					allProductCache: filteredProducts,
					adminProducts: [...new Set((noRepeat = [].concat.apply([], noRepeat)))],
					author: !state.author,
					actualStars: [...new Set((actualStars = [].concat.apply([], actualStars)))].sort(),
					contegorieDisponible: [...new Set((actualCategories = [].concat.apply([], actualCategories)))],
				};
			} else {
				let filteredProducts = [];
				let actualCategories = [];
				let actualStars = [];

				[...state.backUpProducts].filter((f) =>
					f.author.name === action.payload
						? (filteredProducts.push(f), actualStars.push(Math.floor(Number(f.score))))
						: null
				);
				filteredProducts.forEach((f) => f.categories.filter((x) => actualCategories.push(x.name)));
				let noRepeat = [...state.adminProducts].concat(filteredProducts);
					return {
						...state,
						allProductCache: filteredProducts,
						adminProducts: [...new Set((noRepeat = [].concat.apply([], noRepeat)))],
						author: action.admin ? false : true,
						contegorieDisponible: [...new Set((actualCategories = [].concat.apply([], actualCategories)))],
						authorBackUp: filteredProducts,
						actualStars: [...new Set((actualStars = [].concat.apply([], actualStars)))].sort(),
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
				adminProducts:state.backUpProducts,
				author: false,
				categorie: false,
				score: false,
			};

		case TYPES.GET_PRODUCT_REVIEW:
			return { ...state, productReview: action.payload };

		case TYPES.FILTER_PRODUCT_REVIEW:
			//actualizo el state cuando se hace un delete
			return { ...state, productReview: action.payload };

		case TYPES.ALL_PRODUCTS_SCORES:
			return { ...state, allProductsScores: action.payload };

		case 'ORDER_STARS':
			//ordenamiento de mayor a menor en rating
			if (action.payload === 'starUp') {
				if (state.author && state.categorie) {
					state.allProductCache.sort(function (o1, o2) {
						if ((o1.score === null ? 0 : Number(o1.score)) > (o2.score === null ? 0 : Number(o2.score))) {
							return -1;
						} else if (
							(o1.score === null ? 0 : Number(o1.score)) < (o2.score === null ? 0 : Number(o2.score))
						) {
							return 1;
						}

						return 0;
					});
					return {
						...state,
						allProductCache: state.allProductCache,
					};
				}
				if (state.categorie) {
					state.categorieBackUp.sort(function (o1, o2) {
						if ((o1.score === null ? 0 : Number(o1.score)) > (o2.score === null ? 0 : Number(o2.score))) {
							return -1;
						} else if (
							(o1.score === null ? 0 : Number(o1.score)) < (o2.score === null ? 0 : Number(o2.score))
						) {
							return 1;
						}

						return 0;
					});
					return {
						...state,
						allProductCache: state.categorieBackUp,
					};
				}
				if (state.author) {
					return {
						...state,
						allProductCache: state.authorBackUp.sort(function (o1, o2) {
							if (
								(o1.score === null ? 0 : Number(o1.score)) > (o2.score === null ? 0 : Number(o2.score))
							) {
								return -1;
							} else if (
								(o1.score === null ? 0 : Number(o1.score)) < (o2.score === null ? 0 : Number(o2.score))
							) {
								return 1;
							}
							return 0;
						}),
					};
				} else {
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
			}

			//Ordenamiento de menor a mayor en rating
			if (action.payload === 'starDown') {
				if (state.author && state.categorie) {
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
					};
				}
				if (state.categorie) {
					let arr = state.categorieBackUp.sort(function (o1, o2) {
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
					};
				}
				if (state.author) {
					let arr = state.authorBackUp.sort(function (o1, o2) {
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
					};
				} else {
					let arr = state.backUpProducts.sort(function (o1, o2) {
						if (o1?.score > o2?.score) {
							return 1;
						} else if (o1?.score < o2?.score) {
							return -1;
						}
						return 0;
					});

					return { ...state, allProductCache: arr.filter((x) => x.score !== null) };
				}
			}
		case 'CANTS_STARS':
			if (action.payload == 0) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (c.score === null) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (c.score === null) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (c.score === null) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (c.score === null) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}

			///////
			if (action.payload >= 5) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 5 && Math.ceil(Number(c.score)) >= 5) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 5 && Math.ceil(Number(c.score)) >= 5) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (Math.floor(Number(c.score)) === 5 && Math.ceil(Number(c.score)) >= 5) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (Math.floor(Number(c.score)) === 5 && Math.ceil(Number(c.score)) >= 5) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}

			if (action.payload >= 4.0) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 4 && Math.ceil(Number(c.score)) >= 4) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 4 && Math.ceil(Number(c.score)) >= 4) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (Math.floor(Number(c.score)) === 4 && Math.ceil(Number(c.score)) >= 4) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (Math.floor(Number(c.score)) === 4 && Math.ceil(Number(c.score)) >= 4) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}
			if (action.payload >= 3.0) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 3 && Math.ceil(Number(c.score)) >= 3) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 3 && Math.ceil(Number(c.score)) >= 3) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (Math.floor(Number(c.score)) === 3 && Math.ceil(Number(c.score)) >= 3) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (Math.floor(Number(c.score)) === 3 && Math.ceil(Number(c.score)) >= 3) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}

			//Math.floor(Number(c.score)) <= 1 && Math.ceil(Number(c.score)) >= 1
			if (action.payload >= 2.0) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 2 && Math.ceil(Number(c.score)) >= 2) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 2 && Math.ceil(Number(c.score)) >= 2) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (Math.floor(Number(c.score)) === 2 && Math.ceil(Number(c.score)) >= 2) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (Math.floor(Number(c.score)) === 2 && Math.ceil(Number(c.score)) >= 2) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}
			if (action.payload >= 1.0 && action.payload !== 0) {
				if (state.author && !state.categorie) {
					let result = [];

					[...state.authorBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 1 && Math.ceil(Number(c.score)) >= 1) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && !state.author) {
					let result = [];

					[...state.categorieBackUp].forEach((c) => {
						if (Math.floor(Number(c.score)) === 1 && Math.ceil(Number(c.score)) >= 1) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
				if (state.categorie && state.author) {
					let result = [];

					[...state.allProductCache].forEach((c) => {
						if (Math.floor(Number(c.score)) === 1 && Math.ceil(Number(c.score)) >= 1) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				} else {
					let result = [];

					[...state.backUpProducts].forEach((c) => {
						if (Math.floor(Number(c.score)) === 1 && Math.ceil(Number(c.score)) >= 1) return result.push(c);
					});
					return {
						...state,
						allProductCache: result,
					};
				}
			}

		case TYPES.POST_NEW_USER_REVIEW:
			//guarda los reviews antiguos y nuevos de los productos a los cuales se les hace review
			return { ...state, productReview: action.payload };

		case TYPES.PUT_NEW_USER_REVIEW:
			//guarda el review editado y sobreescribe lo que habia antes en newProductReviews
			return { ...state, productReview: action.payload };
			//Elimina un producto del panel de descuentos
		case TYPES.REMOVE_FROM_ADMIN_PANEL:
			return {
				...state,
				adminProducts: state.adminProducts.filter((item) => item.id !== action.payload),
			};
			
			case TYPES.DELETE_ALL_PRODUCTS_SALES:
				return {
					...state,
					adminProducts: []
				}
		case TYPES.UPLOAD_PRODUCTS_WITH_DISCOUNT:
			let saveDiscountButNotReppeat = [];
			let saveDiscountToShowInPanelAdmin= [];
			

			action.payload.forEach((z) => {
				state.backUpProducts.forEach((x) => {
					if (x.id === z.productId) {
						x.discountPrice = z.discountPrice;
						x.percent = z.discountPercent;
						x.booleanDiscount = 'true';
					}
					saveDiscountButNotReppeat.push(x);
				});
			});
			action.payload.forEach((z) => {
				state.adminProducts.forEach((x) => {
					if (x.id === z.productId) {
						x.discountPrice = z.discountPrice
						x.percent = z.discountPercent;
						x.booleanDiscount = 'true'
					}
					saveDiscountToShowInPanelAdmin.push(x);
				});
			});

 
			return {
				...state,
				adminProducts: [
					...new Set((saveDiscountToShowInPanelAdmin = [].concat.apply([], saveDiscountToShowInPanelAdmin))),
				],
				backUpProducts: [
					...new Set((saveDiscountButNotReppeat = [].concat.apply([], saveDiscountButNotReppeat))),
				],
			};
			case TYPES.REFRESH_PRICE_IN_FRONT:

				return {
					...state,
					allProductCache: state.backUpProducts,
				};
		default:
			return state;
	}
}
