/*eslint-disable*/
import * as TYPESUP from '../types/typesUpgrade';
import axios from 'axios'

export const upgradeAuthors = (author) => {
    return { type: TYPESUP.UPGRADE_AUTHOR, payload: author };
};

export const upgradeDeleteAuthors = (authors) => {
    return { type: TYPESUP.UPGRADE_DELETE_AUTHOR, payload: authors };
};

export const upgradeEditAuthors = (authors) => {
    return { type: TYPESUP.UPGRADE_EDIT_AUTHOR, payload: authors };
};

export const upgradeProducts = (product) => {
    return { type: TYPESUP.UPGRADE_PRODUCT, payload: product };
};

export const upgradeDeleteProducts = (products) => {
    return { type: TYPESUP.UPGRADE_DELETE_PRODUCT, payload: products };
};

export const upgradeEditProducts = (products) => {
    return { type: TYPESUP.UPGRADE_EDIT_PRODUCT, payload: products };
};

export const upgradeCategories = (category) => {
    return { type: TYPESUP.UPGRADE_CATEGORY, payload: category };
};

export const upgradeDeleteCategories = (categories) => {
    return { type: TYPESUP.UPGRADE_DELETE_CATEGORY, payload: categories };
};

export const upgradeEditCategories = (categories) => {
    return { type: TYPESUP.UPGRADE_EDIT_CATEGORY, payload: categories };
};

export const upgradeUsers = (user) => {
    return { type: TYPES.UPGRADE_USER, payload: user };
};

export const upgradeDeleteUsers = (users) => {
    return { type: TYPES.UPGRADE_DELETE_USER, payload: users };
};

export const upgradeEditUsers = (users) => {
    return { type: TYPES.UPGRADE_EDIT_USER, payload: users };
};

export const getAllOrdersState = (state) => {
    return (dispatch) => {
        axios
          .get(`${process.env.REACT_APP_BACK_URL}/get/order/?status=${state}`)
          .then((resp) => {
            dispatch({
              type: "TYPES.GET_ALL_ORDERS_STATE",
              payload: resp.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }
}

