/*eslint-disable*/
import * as TYPES from '../types/index';

// LOADING ACTIONS
export const requestData = () => ({
  type: TYPES.REQUEST_DATA,
});
export const requestSuccess = () => ({
  type: TYPES.REQUEST_SUCCESS,
});
export const paginate = (payload) => ({
    type: 'PAG',
  payload: payload,
});
