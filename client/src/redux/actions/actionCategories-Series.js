import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


export const getAllSeries = () => (

    async (dispatch) => {
      try {
        dispatch(requestData())
        const response = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/get/serie`
        );
        dispatch({
          type: TYPES.GET_ALL_SERIES,
          payload: response.data,
        });
        dispatch(requestSuccess())
      } catch (error) {
        console.error(error.message);
        dispatch({
          type: TYPES.GET_ALL_SERIES_ERROR,
          payload: error,
        });
      }
    }
);

export const getAllCategories = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/category`
      );
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES_ERROR,
        payload: error,
      });
    }
  }
);

export const addCategory = (form) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/post/category`, form)
        .then((res) => {
          dispatch({
            type: TYPES.POST_NEW_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.POST_NEW_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)

export const editCategory = (categoryId, category) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(
          `${process.env.REACT_APP_BACK_URL}/put/category/${categoryId}`,
          category
        )
        .then((res) => {
          dispatch({
            type: TYPES.PUT_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)

export const deleteCategory = (categoryId) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .delete(
          `${process.env.REACT_APP_BACK_URL}/delete/category/${categoryId}`
        )
        .then((res) => {
          dispatch({
            type: TYPES.DELETE_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.DELETE_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)
