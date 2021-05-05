/*eslint-disable*/
import axios from "axios";
import * as TYPES from "../types/index";

export const mercadoPago = (orderId) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACK_URL}/post/payments/mercado-pago/create-preference/${orderId}`
    );
    if (response.status === 201) {
      dispatch({
        type: TYPES.CREATE_PAYMENT_MERCADO_PAGO,
        payload: response.data,
      });
      window.localStorage.setItem(
        "mercadoPago",
        JSON.stringify({
          method: response.data.method,
          id: response.data.id,
          url: response.data.url,
        })
      );
    } else {
      dispatch({
        type: TYPES.SET_ERROR_MERCADO_PAGO,
        payload: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const stripe = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACK_URL}/post/payments/stripe/create-session`,
      body
    );
    if (response.status === 201) {
      dispatch({
        type: TYPES.CREATE_PAYMENT_STRIPE,
        payload: response.data,
      });
      window.localStorage.setItem(
        "stripe",
        JSON.stringify({
          method: response.data.method,
          id: response.data.id,
          url: response.data.url,
          methodId: 4,
        })
      );
    } else {
      dispatch({
        type: TYPES.SET_ERROR_STRIPE,
        payload: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
