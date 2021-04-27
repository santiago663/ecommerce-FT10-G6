/*eslint-disable*/
import * as TYPES from "../types/index";

const initialState = {
  mercadoPago: {
    method: "",
    id: "",
    url: "",
    error: false,
  },
  stripe: {
    method: "",
    id: "",
    error: false,
  },
};

export const payments = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_PAYMENT_MERCADO_PAGO:
      return {
        ...state,
        mercadoPago: {
          ...state.mercadoPago,
          method: action.payload.method,
          id: action.payload.id,
          url: action.payload.url,
        },
      };

    case TYPES.SET_ERROR_MERCADO_PAGO:
      return {
        ...state,
        mercadoPago: {
          ...state.mercadoPago,
          error: true,
        },
      };

    case TYPES.CREATE_PAYMENT_STRIPE:
      return {
        ...state,
        stripe: {
          ...state.stripe,
          method: action.payload.method,
          id: action.payload.id,
        },
      };

    case TYPES.SET_ERROR_STRIPE:
      return {
        ...state,
        stripe: {
          ...state.stripe,
          error: true,
        },
      };

    default:
      return state;
  }
};
