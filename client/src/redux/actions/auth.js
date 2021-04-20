/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config'
import { setError } from './uiError';
import { pushStorageToCartUser, emptyToCartUser } from "./actionOrder"

export const isLogged = (payload) => ({
  type: TYPES.AUTH_LOGIN,
  payload: payload
})
export const setCurrentUser = (payload) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: payload
})

export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(async (resp) => {
      localStorage.removeItem("CurrentUser")
      dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
    })
  }
}

export const startRegister = (name, email, password) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user, additionalUserInfo }) => {
        console.log(additionalUserInfo)
        const resp = await axios({
          method: 'post',
          url: 'http://localhost:3001/post/user',
          data: { name: name, email: user.email, isGuest: false }
        });
        if (additionalUserInfo.isNewUser) {
          const currentProducts = JSON.parse(localStorage.getItem("orderProducts"))
          if (currentProducts) {
            dispatch(pushStorageToCartUser(currentProducts, resp.data))
          }
        }
        localStorage.clear();
        localStorage.setItem('CurrentUser', JSON.stringify(resp.data))
        dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
      }).catch(error => {
        dispatch(setError(error.message))
      })
  }
}

export const startLoginEmailPassword = (email, password) => {

  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        const resp = await axios.get(`http://localhost:3001/get/user?email=${user.email}`)

        var orderProducts = JSON.parse(localStorage.getItem('orderProducts'))

        if (orderProducts?.length > 0) {

          dispatch(emptyToCartUser(resp.data))

          const userOrder = await axios.get(`http://localhost:3001/get/order/users/${resp.data.id}/cart`);

          dispatch(pushStorageToCartUser(orderProducts, resp.data, userOrder.data.id))
          localStorage.clear()
          localStorage.setItem('CurrentUser', JSON.stringify(resp.data))
          dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
        }
        else {
          localStorage.setItem('CurrentUser', JSON.stringify(resp.data))
          dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
        }

      }).catch((error) => {
        dispatch(setError(error.message))
      })
  }
};

export const startGoogleLogin = () => {

  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(async ({ user }) => {
        
        const findUser = await axios.get(`http://localhost:3001/get/user?email=${user.email}`)

        //new user
        if (findUser.data === null) {

          const resp = await axios({
            method: 'post',
            url: 'http://localhost:3001/post/user',
            data: { name: user.displayName, email: user.email, isGuest: false }
          })

          const currentProducts = JSON.parse(localStorage.getItem("orderProducts"))
          
          //si hay data en el carrito, se crea una orden nueva con los productos
          if (currentProducts) {
            dispatch(pushStorageToCartUser(currentProducts, resp.data))
          }
          localStorage.clear();
          localStorage.setItem('CurrentUser', JSON.stringify(resp.data))     
          dispatch({ type: TYPES.AUTH_LOGIN, payload: true })   
        } 

        //login
        else {

          const respUser = await axios.get(`http://localhost:3001/get/user?email=${user.email}`)

          //se busca el carrito del localStorage
          var orderProducts = JSON.parse(localStorage.getItem('orderProducts'))

          //si hay data en el carrito
          if (orderProducts?.length > 0) {

            dispatch(emptyToCartUser(respUser.data))
  
            const userOrder = await axios.get(`http://localhost:3001/get/order/users/${respUser.data.id}/cart`);
  
            dispatch(pushStorageToCartUser(orderProducts, respUser.data, userOrder.data?.id))
            localStorage.clear()
            localStorage.setItem('CurrentUser', JSON.stringify(respUser.data))
            dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
          }
          else {
            localStorage.setItem('CurrentUser', JSON.stringify(respUser.data))
            dispatch({ type: TYPES.AUTH_LOGIN, payload: true })
          }         
        }

      }).catch(error => {
        dispatch(setError(error.message))
      })
  }
}
