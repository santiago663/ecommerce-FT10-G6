/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import Swal from 'sweetalert2';
import { requestData, requestSuccess } from './request';
import { setError } from './uiError';

export const login = (uid, displayName) => ({
    type: TYPES.AUTH_LOGIN,
    payload: {
        uid,
        displayName
    }
})
export const logout = (uid, displayName) => ({
    type: TYPES.AUTH_LOGOUT,
    payload: {
    }
})
export const startRegister = (name, email, password) => {
    return (dispatch) => {
        dispatch(requestData())
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(requestSuccess())
            }).catch(e => {
                dispatch(requestSuccess())
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startLoginEmailPassword = (email, password) => (

    async (dispatch) => {

        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            const res = await axios.get(`http://localhost:3001/get/user?email=${response.user.email}`)
            localStorage.setItem('CurrentUser', JSON.stringify(res.data))
            const dataas = localStorage.getItem('CurrentUser')

        } catch (error) {
            dispatch(setError(error.message))
            console.error("errrrr", error.message);

        }
    }
);


export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

