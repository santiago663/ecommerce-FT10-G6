/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'

export const getUserWhislist = (userId) => {
    return (dispatch) => {
        axios
          .get(`${process.env.REACT_APP_BACK_URL}/get/wishlist/${userId}`)
          .then((resp) => {
            dispatch({ type: TYPES.GET_CURRENT_WISHLIST, payload: resp.data });
          });
    }
}

export const putUserWhislist = (Body) => {
    return (dispatch) => {
        axios
          .put(`${process.env.REACT_APP_BACK_URL}/put/wishlist/add`, Body)
          .then((resp) => {
            dispatch({ type: TYPES.PUT_CURRENT_WISHLIST, payload: resp.data });
          });
    }
}

export const deleteUserWhislist = (Body) => {
    return (dispatch) => {
        axios
          .put(`${process.env.REACT_APP_BACK_URL}/put/wishlist/delete`, Body)
          .then((resp) => {
            dispatch({
              type: TYPES.DELETE_CURRENT_WISHLIST,
              payload: resp.data,
            });
          });
    }
}