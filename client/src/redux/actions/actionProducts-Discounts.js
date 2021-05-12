/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


export const getAllProducts = () => (

  async (dispatch) => {

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/product`
      );
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_ALL_PRODUCTS,
          payload: response.data
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.GET_ALL_PRODUCTS_ERROR,
        payload: error,
      });
    }
  }
);

export const getOneProduct = (id) => (

    async (dispatch) => {
  
      try {
        dispatch(requestData())
        const response = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/get/product/${id}`
        );
        dispatch({
          type: TYPES.GET_ONE_PRODUCT,
          payload: response.data,
        });
        dispatch(requestSuccess())
      } catch (error) {
        console.error(error.message);
        dispatch({
          type: TYPES.GET_ONE_PRODUCT_ERROR,
          payload: error,
        });
      }
    }
);

export const searchByTitle = (keyword) => (

async (dispatch) => {

        try {
        dispatch(requestData())
        const response = await axios.get(
            `${process.env.REACT_APP_BACK_URL}/get/product/search?keyword=${keyword}`
        );

        response.data.length !== 0 && dispatch({
            type: TYPES.SET_SEARCH_PRODUCTS,
            payload: response.data,
        });
        dispatch(requestSuccess())
        } catch (error) {
        console.error(error);
        dispatch({
            type: TYPES.SET_SEARCH_PRODUCTS_ERROR,
            payload: error,
        });
        }
    }
);

export const addProducts = (product) => (

    (dispatch) => {

        try {
        dispatch(requestData())
        axios
            .post(`${process.env.REACT_APP_BACK_URL}/post/product`, product)
            .then((res) => {
            dispatch({
                type: TYPES.POST_NEW_PRODUCT,
                payload: res,
            });
            dispatch(requestSuccess());
            })
            .catch((error) => console.error(error));
        } catch (error) {
        dispatch({
            type: TYPES.POST_NEW_PRODUCT_ERROR,
            payload: error,
        });
        }
    }
)

export const editProductByBody = (productId, product) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .put(
            `${process.env.REACT_APP_BACK_URL}/put/product/${productId}`,
            product
          )
          .then((res) => {
            dispatch({
              type: TYPES.PUT_EDIT_PRODUCT_BYID,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.PUT_EDIT_PRODUCT_BYID_ERROR,
          payload: error,
        });
      }
    }
)
//Editar o Eliminar Productos desde Admin
export const editProductCategory = (productId, value) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .put(
            `${process.env.REACT_APP_BACK_URL}/put/product/${productId}/category/${value}`
          )
          .then((res) => {
            dispatch({
              type: TYPES.PUT_EDIT_PRODUCT_CATEGORY,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.PUT_EDIT_PRODUCT_CATEGORY_ERROR,
          payload: error,
        });
      }
    }
)

export const deleteProduct = (productId) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .delete(`${process.env.REACT_APP_BACK_URL}/delete/product/${productId}`)
          .then((res) => {
            dispatch({
              type: TYPES.DELETE_ONE_PRODUCT,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.DELETE_ONE_PRODUCT_ERROR,
          payload: error,
        });
      }
    }
)
  
export const deleteProductCategory = (productId, id) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .delete(
            `${process.env.REACT_APP_BACK_URL}/delete/product/${productId}/category/${id}`
          )
          .then((res) => {
            dispatch({
              type: TYPES.DELETE_PRODUCT_CATEGORY,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.DELETE_ONE_PRODUCT_ERROR,
          payload: error,
        });
      }
    }
)

export const sendDiscountToBack = (objectToApplyDiscount) => {

  return (dispatch) => {
      axios.post(`${process.env.REACT_APP_BACK_URL}/post/discount`, objectToApplyDiscount)
      .then((res)=>{
        dispatch({
          type: TYPES.GET_ALL_PRODUCTS,
          payload: res.data
        });
      })
        .catch((e) => console.log(e));
}
}; 

export const deleteDiscount = (productsId) => {
console.log(productsId)
  return (dispatch) => {
      axios.delete(`${process.env.REACT_APP_BACK_URL}/delete/discount`, { data: { productsId } })
      .then(()=>{
        dispatch(getAllProducts()) 
      })
      .catch((e) => console.log(e));
  }
}; 
