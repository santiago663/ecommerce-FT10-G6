/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {

    stateAction: [],
    stateError: [],

};

export default function reducerErrorRoutes(state = initialState, action) {
 
    switch (action.type) {

        case TYPES.POST_NEW_CATEGORY:
        case TYPES.DELETE_CATEGORY:
        case TYPES.PUT_CATEGORY:
        case TYPES.DELETE_AUTHOR:
        case TYPES.PUT_EDIT_AUTHOR:
        case TYPES.NEW_AUTHOR:
        case TYPES.POST_NEW_PRODUCT:
        case TYPES.PUT_EDIT_PRODUCT_BYID:
        case TYPES.PUT_EDIT_PRODUCT_CATEGORY:
        case TYPES.DELETE_PRODUCT_CATEGORY:
        case TYPES.DELETE_ONE_PRODUCT:
        case TYPES.PUT_USER:
            return {
                ...state,
                stateAction: action.payload,
            };

        case TYPES.POST_NEW_CATEGORY_ERROR:
        case TYPES.DELETE_CATEGORY_ERROR:
        case TYPES.PUT_CATEGORY_ERROR:
        case TYPES.DELETE_AUTHOR_ERROR:
        case TYPES.PUT_EDIT_AUTHOR_ERROR:
        case TYPES.NEW_AUTHOR_ERROR:
        case TYPES.POST_NEW_PRODUCT_ERROR:
        case TYPES.PUT_EDIT_PRODUCT_BYID_ERROR:
        case TYPES.PUT_EDIT_PRODUCT_CATEGORY_ERROR:
        case TYPES.DELETE_ONE_PRODUCT_ERROR:
        case TYPES.DELETE_ONE_PRODUCT_ERROR:
        case TYPES.PUT_USER_ERROR:
            return {
                ...state,
                stateError: action.payload,
            };

        default:
            return state;
    }
}