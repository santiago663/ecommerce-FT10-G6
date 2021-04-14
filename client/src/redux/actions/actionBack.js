/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import {requestData, requestSuccess} from './request.js'


/* ----------------------*/
/* LOCAL FAKE-DB ACTIONS */
/* ----------------------*/

export const getAllProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/get/product');
  if (response.status === 200) {
    dispatch({ type: TYPES.GET_ALL_PRODUCTS, payload: response.data });
  }
};

export const getAllAuthors = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/get/author');
      dispatch({
        type: TYPES.GET_ALL_AUTHORS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getAllCategories = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/get/category');
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getAllSeries = () => (

  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/get/serie');
      dispatch({
        type: TYPES.GET_ALL_SERIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getOneProduct = (id) => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(`http://localhost:3001/get/product/${id}`);
      dispatch({
        type: TYPES.GET_ONE_PRODUCT,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const searchByArtist = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get('http://jsonplaceholder.typicode.com/users');
      dispatch({
        type: SEARCH_BY_ARTIST,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error);
    }
  }
);

export const searchByTitle = (keyword) => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(`http://localhost:3001/get/product/search?keyword=${keyword}`);
      console.log(response)
      dispatch({
        type: TYPES.GET_ALL_PRODUCTS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
);

export const addCategory = (form) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios.post('http://localhost:3001/post/category', form)
        .then((res) => {
          dispatch({
            type: TYPES.NEW_CATEGORY,
            payload: res.data,
          });
          dispatch(requestSuccess())
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.log(error);
    }
  }
)

export const addAuthor = (author) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios.post('http://localhost:3001/post/author', author)
        .then((res) => {
          dispatch({
            type: TYPES.NEW_AUTHOR,
            payload: res.data,
          });
          dispatch(requestSuccess())
        }).catch((error) => console.error(error))
    } catch (error) {
      console.log(error);
    }
  }
)