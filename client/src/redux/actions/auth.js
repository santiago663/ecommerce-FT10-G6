/*eslint-disable*/
import * as TYPES from '../types/index';

export const login = (uid, displayName) => ({
    type: TYPES.AUTH_LOGIN,
    payload: {
        uid,
        displayName
    }
})
export const logout = (uid, displayName) => ({
    type: TYPES.AUTH_LOGOUT,
    payload: {
    }
})