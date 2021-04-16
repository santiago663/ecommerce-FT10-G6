/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
    msgError: null,
};

export default function uiError(state = initialState, action) {
    switch (action.type) {
        case TYPES.UI_SET_ERROR:
            return {
                ...state,
                msgError: action.payload
            }

        case TYPES.UI_REMOVE_ERROR:
            return {
                ...state,
                msgError: null
            }

        default:
            return state;
    }
}