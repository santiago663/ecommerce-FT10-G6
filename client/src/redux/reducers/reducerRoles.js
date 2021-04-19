/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {

  allRoles: [],
};

export default function reducerRoles (state = initialState, action){

  switch (action.type) {

    case TYPES.GET_ALL_ROLES:
      return {
        ...state,
        allRoles: action.payload,
      };

    default:
      return state;
  }
};