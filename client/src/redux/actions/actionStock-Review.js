/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


export const editProductStock = (stock) => {
    return async () => {
      try {
        await axios.put(
          `${process.env.REACT_APP_BACK_URL}/put/product/stock/edit`,
          stock
        );
      }
      catch (error) {
        console.log(error)
      }
    }
};

export const getProductReview = (productId) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .get(
            `${process.env.REACT_APP_BACK_URL}/get/review?productId=${productId}`
          )
          .then((res) => {
            dispatch({
              type: TYPES.GET_PRODUCT_REVIEW,
              payload: res.data,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.GET_ALL_USERS_ERROR,
          payload: error,
        });
      }
    }
  )
  
export const postUserReview = (productId, userId, review) => {
    return (dispatch) => {
      try {
              
        axios
          .post(
            `${process.env.REACT_APP_BACK_URL}/post/review?productId=${productId}&userId=${userId}`,
            review
          )
          .then((res) => {
            dispatch({
              type: TYPES.POST_NEW_USER_REVIEW,
              payload: res.data,
            });
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.POST_NEW_USER_REVIEW_ERROR,
          payload: error,
        });
      }
    }
};
  
export const updateReviewProduct = (id, newScore) => {
    return async () => {
      try {
        await axios.put(
          `${process.env.REACT_APP_BACK_URL}/put/product/review/${id}`,
          { score: newScore }
        );
      }
      catch (error) {
        console.log(error)
      }
    }
};
  
export const deleteUserReview = (id) => {
    return async () => {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACK_URL}/delete/review/${id}`
        );
      }
      catch (error) {
        console.log(error)
      }
    }
};
  
export const editUserReview = (id, review) => {
    return async (dispatch) => {
      try {
        await axios
          .put(`${process.env.REACT_APP_BACK_URL}/put/review/${id}`, review)
          .then((res) => {
            dispatch({
              type: TYPES.PUT_NEW_USER_REVIEW,
              payload: res.data,
            });
          });
      }
      catch (error) {
        console.log(error)
      }
    }
};
