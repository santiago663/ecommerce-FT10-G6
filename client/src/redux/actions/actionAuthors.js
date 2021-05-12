/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


export const getAllAuthors = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/author`
      );
      dispatch({
        type: TYPES.GET_ALL_AUTHORS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_AUTHORS_ERROR,
        payload: error,
      });
    }
  }
);

export const addAuthor = (author) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .post(`${process.env.REACT_APP_BACK_URL}/post/author`, author)
          .then((res) => {
            dispatch({
              type: TYPES.NEW_AUTHOR,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        console.error(error);
        dispatch({
          type: TYPES.NEW_AUTHOR_ERROR,
          payload: error,
        });
      }
    }
)

export const editAuthor = (authorId, author) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .put(`${process.env.REACT_APP_BACK_URL}/put/author/${authorId}`, author)
          .then((res) => {
            dispatch({
              type: TYPES.PUT_EDIT_AUTHOR,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.PUT_EDIT_AUTHOR_ERROR,
          payload: error,
        });
      }
    }
)

export const deleteAuthor = (authorId) => (

    (dispatch) => {
  
      try {
        dispatch(requestData())
        axios
          .delete(`${process.env.REACT_APP_BACK_URL}/delete/author/${authorId}`)
          .then((res) => {
            dispatch({
              type: TYPES.DELETE_AUTHOR,
              payload: res,
            });
            dispatch(requestSuccess());
          })
          .catch((error) => console.error(error));
      } catch (error) {
        dispatch({
          type: TYPES.DELETE_AUTHOR_ERROR,
          payload: error,
        });
      }
    }
)
