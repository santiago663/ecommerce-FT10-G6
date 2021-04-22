/*eslint-disable*/
import axios from "axios";
import * as TYPES from "../types/index";

export const createPreference = (orderId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/get/mercadopago/create_preference/${orderId}`
    );
    if (response.status === 200) {
      dispatch({
        type: TYPES.CREATE_PREFERENCE,
        payload: response.data,
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: TYPES.SET_ERROR,
      payload: true,
    });
  }
};
