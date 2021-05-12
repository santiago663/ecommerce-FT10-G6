/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


export const getAllrRoles = () => (

  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/roles`
      );
      dispatch({
        type: TYPES.GET_ALL_ROLES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_ROLES_ERROR,
        payload: error,
      });
    }
  }
);




export const editUser = (userId, user) => (

  (dispatch) => {
console.log('entro aqui')
console.log(user, userId)
    try {
      dispatch(requestData())
      axios
        .put(`${process.env.REACT_APP_BACK_URL}/put/user/${userId}`, user)
        .then((res) => {
          console.log("resp action", res.data)
          //no yo... nadieeee entiende para que es esto.. NADIE
          dispatch({            
            type: TYPES.PUT_USER,
            payload: res,
          });
          dispatch(getAllUsers())
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_USER_ERROR,
        payload: error,
      });
    }
  }
)

export const getAllUsers = () => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .get(`${process.env.REACT_APP_BACK_URL}/get/user`)
        .then((res) => {
          dispatch({
            type: TYPES.GET_ALL_USERS,
            payload: res.data,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.GET_ALL_USERS_ERROR,
        payload: error,
      });
    }
  }
)

export const deleteUserAction = (id) => (
  (dispatch) => {
    try {
      dispatch(requestData())
      axios.delete(`${process.env.REACT_APP_BACK_URL}/delete/user/${id}`);
      dispatch(requestSuccess())
    } catch (error) {
      console.log(error)
    }
  }
)






