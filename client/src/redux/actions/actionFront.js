/*eslint-disable*/
import * as TYPES from "../types/index";

//                                      //
//          ACTIONS SHOPPINGCART        //
//                                      //

export const addToCart = (payload) => {
  return { type: TYPES.ADD_TO_CART, payload };
};

export const getLocalStorageGuest = () => {
  let orderProducts = JSON.parse(localStorage.getItem("orderProducts")) || []
  return { type: TYPES.LOAD_STORAGE_GUEST, payload: orderProducts };
};

export const removeFromCart = (payload) => {
  return { type: TYPES.REMOVE_FROM_CART, payload };
};









//                                                  //
//          ACTION FILTERS alphabetical:            //
//                                                  //

export const orderAsc = (type) => (dispatch, getState) => {
  const products = getState().reducerProduct.allProductCache.slice();

  if (type === "asc_name") {
    let productsOrder = products.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );

    dispatch({
      type: TYPES.ORDER_ASC_NAME,
      payload: {
        productsOrder,
        name: type,
      },
    });
  }
  if (type === "desc_name") {
    let productsOrder = products.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1
    );

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

export const orderByCategories = (categories) => (dispatch) => {
  

  dispatch({
    type: TYPES.ORDER_BY_CATEGORIES,
    payload :categories
  });
};

export const orderByAuthor = (author) => (dispatch) => {
  dispatch({
		type: 'ORDER_BY_AUTHOR',
    payload:author,})
};

export const getBackup = () => (dispatch) =>{
  dispatch({type: 'GET_ALL_FROM_BACKUP'})
}
