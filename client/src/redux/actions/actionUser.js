/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { setCurrentUser } from './auth'


export const editCurrentUser = (userId, user) => (
    (dispatch) => {
        try {
            axios
              .put(`${process.env.REACT_APP_BACK_URL}/put/user/${userId}`, user)
              .then((res) => {
                localStorage.setItem(
                  "CurrentUser",
                  JSON.stringify(res.data.user)
                );
                dispatch(setCurrentUser(res.data.user));
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

export const activate2fa = (email, cellphone, country_code) => (
    
    (dispatch) => {
        console.log(email, cellphone, country_code)
        try {
            axios
              .post(`${process.env.REACT_APP_BACK_URL}/post/2fa`, {
                email,
                cellphone,
                country_code,
              })
              .then((res) => {
                localStorage.setItem(
                  "CurrentUser",
                  JSON.stringify(res.data)
                );
                dispatch(setCurrentUser(res.data));
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

