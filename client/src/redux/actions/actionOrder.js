/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { addToCart, removeFromCart } from './actionFront'

export const getCurrentOrder = (userId) => {
    return ( dispatch ) => {
        axios.get(`http://localhost:3001/get/order/users/${userId}/cart`)
        .then((resp) => {
            dispatch({type: TYPES.GET_CURRENT_ORDER, payload: resp.data})
            resp.data.products.forEach(product => {
                dispatch(addToCart(product))
            });
            
        }).catch(error => {
            console.log(error)
        })
    }
};


export const addToCartUser = (payload, currentUser, currentOrder, total) => {
    console.log(currentOrder)
 return (dispatch) =>{
     const orden = {
     userId: currentUser.id,
     id: currentOrder[0]? currentOrder[0].id : '',
     total: total,
     price:[Number(payload.price)],
     productId: [payload.id]
     }
     console.log('OOORDEEEEN',orden)
     axios.post("http://localhost:3001/post/order", orden)
     .then(resp => {
         console.log(resp.data)
        dispatch({type: TYPES.GET_CURRENT_ORDER, payload: resp.data})
        dispatch(addToCart(payload))
     }).catch(error => {
         console.log(error)
     })
 }
}

export const removeToCartUser = (payload, currentUser, currentOrder, total) => {
    return (dispatch) =>{
        const orden = {
        orderId: currentOrder ? currentOrder[0].id : '',
        total: total,
        productId: payload.id
        }
        console.log(orden)
        axios.put(`http://localhost:3001/put/user/${currentUser.id}/cart`, orden)
        .then(resp => {
            dispatch(removeFromCart(payload))
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }
}