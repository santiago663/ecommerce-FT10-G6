/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { setError } from './uiError';

export const isLogged = (payload) => ({
    type: TYPES.AUTH_LOGIN,
    payload: payload
})
export const logout = async () => {
    //hacer el logout de firebase
    try {
        const resp = firebase.auth.signout()
        localStorage.removeItem("CurrentUser")
    } catch (error) {
        console.log(error)
    }
}

export const startRegister = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
            }).catch(e => {
                console.log(e);
            })
    }
}

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                const resp = await axios.get(`http://localhost:3001/get/user?email=${user.email}`)
                console.log(resp.data)
                localStorage.setItem('CurrentUser', JSON.stringify(resp.data))
                dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
            }).catch((error) => {
                dispatch(setError(error.message))
                console.error("errrrr", error.message);
            })
    }
};

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

