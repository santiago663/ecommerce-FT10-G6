/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
    isLog: false,
    currentUser: [],
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case TYPES.AUTH_LOGIN:
            return {
                ...state,
                isLog: action.payload
            }

        case TYPES.AUTH_LOGOUT:
            return {
                isLog: false
            }

        default:
            return state;
    }
}
