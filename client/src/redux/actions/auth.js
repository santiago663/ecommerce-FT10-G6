/*eslint-disable*/
import * as TYPES from '../types/index';

export const login = (uid, displayName) => ({
    type: TYPES.login,
    payload: {
        uid,
        displayName
    }
})