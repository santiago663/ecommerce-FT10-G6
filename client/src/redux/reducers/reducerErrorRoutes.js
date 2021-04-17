/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {

    postProduct: [],
    postProductError: [],
    putProduct: [],
    putProductError: [],
    deleteProduct: [],
    deleteProductError: [],
};

export default function reducerErrorRoutes(state = initialState, action) {
 
    switch (action.type) {

        case TYPES.POST_NEW_PRODUCT:
            return {
                ...state,
                postProduct: action.payload,
            };

        case TYPES.POST_NEW_PRODUCT_ERROR:
            return {
                ...state,
                postProductError: action.payload,
            };

        case TYPES.PUT_EDIT_PRODUCT_BYID:
        case TYPES.PUT_EDIT_PRODUCT_CATEGORY:
            return {
                ...state,
                putProduct: action.payload,
            };

        case TYPES.PUT_EDIT_PRODUCT_BYID_ERROR:
        case TYPES.PUT_EDIT_PRODUCT_CATEGORY_ERROR:
            return {
                ...state,
                putProductError: action.payload,
            };

        case TYPES.DELETE_PRODUCT_CATEGORY:
        case TYPES.DELETE_ONE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
            };

        case TYPES.DELETE_ONE_PRODUCT_ERROR:
        case TYPES.DELETE_ONE_PRODUCT_ERROR:
            return {
                ...state,
                deleteProductError: action.payload,
            };

        default:
            return state;
    }
}