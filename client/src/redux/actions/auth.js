/*eslint-disable*/
import * as TYPES from '../types/index';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { requestData, requestSuccess } from './request';

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
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(e => {
                console.log(e);
            })
    }
}
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(e => {
                console.log(e);
            })
    }
}
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

