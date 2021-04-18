/*eslint-disable*/
import * as TYPES from '../types/index';

const initialState = {
    isLog: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.AUTH_LOGIN:
            return {
                ...state,
                isLog: action.payload
            }

        case TYPES.AUTH_LOGOUT:
            return {
                isLog: false
            }

        default:
            return state;
    }
}

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
                Swal.fire('Error', e.message, 'error')
            })
    }
}