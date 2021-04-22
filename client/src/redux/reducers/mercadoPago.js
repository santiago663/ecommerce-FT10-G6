/*eslint-disable*/
import * as TYPES from "../types/index";

const initialState = {
  preferenceId: "",
  error: false,
};

export const mercadoPago = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_PREFERENCE:
      return {
        ...state,
        preferenceId: action.payload,
      };

    case TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
