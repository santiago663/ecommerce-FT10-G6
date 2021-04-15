/*eslint-disable*/
import * as TYPES from '../types/index';

export const filterAlphabetic = (payload) => ({
	type: TYPES.FILAZZA,
	payload: payload,
});

export const addToCart = (payload) =>{
    return { type: TYPES.ADD_TO_CART,payload };
}

export const removeFromCart = (payload) =>{
    return {type: TYPES.REMOVE_FROM_CART,payload}
}