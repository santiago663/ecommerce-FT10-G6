/*eslint-disable*/
import axios from "axios";
import * as TYPES from "../types/index";
import { requestData, requestSuccess } from './request.js'


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
			type: TYPES.ORDER_BY_AUTHOR,
			payload: author,
      
		});

};

export const getBackup = () => (dispatch) =>{
  dispatch({type: TYPES.GET_ALL_FROM_BACKUP})
}


//                                                  //
//          ACTION FILTERS orderBy Score Up:      //
//                                                  //
export const orderStar = (payload)=> (dispatch) => {
	
  

		dispatch({
			type: 'ORDER_STARS',
			payload: payload,
		});
  }

  
//                                                  //
//          ACTION FILTERS orderBy unitStars:      //
//                                                  //

  export const choiseStar = (payload) => (dispatch) =>{
    	dispatch({
			type: 'CANTS_STARS',
			payload: payload,
		});
  }
//all scores

export const allProductsScores = (allScores) => (dispatch) =>{ 
  dispatch(requestData())
  dispatch({
    type: TYPES.ALL_PRODUCTS_SCORES,
    payload: allScores
  })
  dispatch(requestSuccess())
}

export const filterNewProductReviews = (reviews) => (dispatch) =>{ 
  dispatch({
    type: TYPES.PUT_NEW_USER_REVIEW,
    payload: reviews
  })
}

export const filterAllProductReviews = (reviews) => (dispatch) =>{ 
  dispatch({
    type: TYPES.FILTER_PRODUCT_REVIEW,
    payload: reviews
  })
}

export const allUserProducts = (products) => (dispatch) =>{ 
  dispatch({
    type: TYPES.ALL_USER_PRODUCTS,
    payload: products
  })
}

export const removeProductForAdmin = (id)=>(dispatch) =>{
  dispatch({
    type: TYPES.REMOVE_FROM_ADMIN_PANEL,
    payload: id
  })
}

export const deletAllProductsSales = () =>(dispatch) => {
  dispatch({
    type: TYPES.DELETE_ALL_PRODUCTS_SALES
  })
}



export const cleanShoopingCart = () => {
	return { type: TYPES.CLEAN_SHOPPING_CART };
};

export const sendEmailOrderSuccess = (data) => (dispatch) => {
  axios.post(`${process.env.REACT_APP_BACK_URL}/emails/signup`, data);
  
}