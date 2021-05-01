/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'

export const getUserWhislist = (userId) => {
    return (dispatch) => {
        axios.get("http://localhost:3001/get/wishlist/" + userId)
        .then((resp) => {
            dispatch({type: TYPES.GET_CURRENT_WISHLIST, payload: resp.data})
        })
    }
}