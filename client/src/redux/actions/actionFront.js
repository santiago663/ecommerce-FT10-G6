/*eslint-disable*/
import * as TYPES from '../types/index';

//                                      //
//          ACTIONS SHOPPINGCART        //
//                                      //

export const addToCart = (payload) => {
	return { type: TYPES.ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
	return { type: TYPES.REMOVE_FROM_CART, payload };
};

//                                                  //
//          ACTION FILTERS alphabetical:            //
//                                                  //

export const orderAsc = (type) => (dispatch, getState) => {
	const products = getState().reducerProduct.allProductCache.slice();

	if (type === 'asc_name') {
		let productsOrder = products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));

		dispatch({
			type: TYPES.ORDER_ASC_NAME,
			payload: {
				productsOrder,
				name: type,
			},
		});
	}
	if (type === 'desc_name') {
		let productsOrder = products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1));

		dispatch({
			type: TYPES.ORDER_DESC_NAME,
			payload: {
				productsOrder,
				name: type,
			},
		});
	}
};

//                                                  //
//          ACTION FILTERS orderBy Categories:      //
//                                                  //

export const orderByCategories = (categories) => (dispatch, getState) => {
	var backup = getState().reducerProduct.backUpProducts.slice();
	let filteredProducts = [];

	backup
		.slice()
		.filter((f) => f.categories.forEach((x) => (x.name === categories ? filteredProducts.push(f) : null)));

	dispatch({
		type: TYPES.ORDER_BY_CATEGORIES,
		payload: {
			categories,
			productCategory: filteredProducts,
		},
	});
};

export const orderByAuthor = (author) => (dispatch, getState) => {
	var backup = getState().reducerProduct.backUpProducts.slice();

	let filteredProducts = [];

	backup.slice().filter((f) => (f.author.name === author ? filteredProducts.push(f) : null));

	dispatch({
		type: TYPES.ORDER_BY_CATEGORIES,
		payload: {
			productCategory: filteredProducts,
		},
	});
};

export const addProductInProductBackup = (product) => (dispatch) => {

	dispatch({
		type: TYPES.ADD_PRODUCT_IN_PRODUCT_BACKUP,
		payload: product
	});
};
