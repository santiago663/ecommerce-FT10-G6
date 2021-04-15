/*eslint-disable*/
import * as TYPES from '../types/index';

export const authReducer = (state = {}, action) => {
    switch (action.type) {

        case TYPES.AUTH_LOGIN:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case TYPES.AUTH_LOGOUT:
            return {}

        default:
            return state;
    }
}