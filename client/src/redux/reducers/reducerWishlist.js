/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
    wishlist: []
}


export default function reducerWishlist(state = initialState, action) {
    switch (action.type) {
        case TYPES.GET_CURRENT_WISHLIST:
        case TYPES.PUT_CURRENT_WISHLIST:
        case TYPES.DELETE_CURRENT_WISHLIST:
            return {
                ...state,
                wishlist: action.payload
            }
        default:
            return state;
    }
}