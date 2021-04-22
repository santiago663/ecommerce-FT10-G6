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
    type: TYPES.PAG,
  payload: payload,
});
export const setActive = (payload) => ({
  type: TYPES.ACTIVE,
  payload:payload
})

export const setMenu = (payload) => ({
  type: TYPES.MENU,
  payload: payload
})