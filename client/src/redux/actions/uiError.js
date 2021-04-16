/*eslint-disable*/
import * as TYPES from '../types/index';

export const setError = (err) => ({
    type: TYPES.UI_SET_ERROR,
    payload: err
})

export const removeError = () => ({
    type: TYPES.UI_REMOVE_ERROR,
})