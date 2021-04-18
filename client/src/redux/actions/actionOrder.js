/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { addToCart } from './actionFront'

export const getCurrentOrder = (userId) => {
    return ( dispatch ) => {
        axios.get(`http://localhost:3001/get/order/users/${userId}/cart`)
        .then((resp) => {
            dispatch({type: TYPES.GET_CURRENT_ORDER, payload: resp.data})
            resp.data.products.forEach(product => {
                dispatch(addToCart(product))
            });
            
        })
    }
}