/*eslint-disable*/
import axios from "axios";
import * as TYPES from "../types/index";
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import { setError } from "./uiError";
import { pushStorageToCartUser, emptyToCartUser } from "./actionOrder";
import Swal from "sweetalert2";

export const isLogged = (payload) => ({
  type: TYPES.AUTH_LOGIN,
  payload: payload,
});
export const setCurrentUser = (payload) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: payload,
});

export const logout = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(async (resp) => {
        localStorage.removeItem("CurrentUser");
        dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
      })
      .then(() => {
        location.assign(process.env.REACT_APP_FRONT_URL);
      });
  };
};

export const startRegister = (name, email, password, profilePic) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user, additionalUserInfo }) => {
        const resp = await axios({
          method: "post",
          url: `${process.env.REACT_APP_BACK_URL}/post/user`,
          data: {
            name: name,
            email: user.email,
            isGuest: false,
            profilePic: profilePic,
          },
        });
        if (additionalUserInfo.isNewUser) {
          const currentProducts = JSON.parse(
            localStorage.getItem("orderProducts")
          );
          if (currentProducts) {
            dispatch(pushStorageToCartUser(currentProducts, resp.data));
          }
        }
        localStorage.clear();
        localStorage.setItem("CurrentUser", JSON.stringify(resp.data));
        dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export const startLoginEmailPassword = (email, password) => {

  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        const findUser = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/get/user?email=${user.email}`
        );
        if (findUser.data.roleId === 103) throw "banned";

        return findUser;
      })
      .then(async (resp) => {

        if (resp.data?.authy) {

          await Swal.fire({
            title: "Enter your Authy code",
            input: "text",
            inputLabel: "Authy code",
            inputPlaceholder: "Enter your Authy code",
            inputAttributes: {
              maxlength: 10,
              autocapitalize: "off",
              autocorrect: "off",
            },
          }).then(async (result) => {
            if (result.isDismissed === false && result.isConfirmed === true) {
              const validation = await axios.post(
                `${process.env.REACT_APP_BACK_URL}/post/2fa/validation`,
                { email: resp.data?.email, code: result.value }
              );

              if (validation.data.success === false) {
                throw "wrongCode";
              } else {
                var orderProducts = JSON.parse(
                  localStorage.getItem("orderProducts")
                );

                if (orderProducts?.length > 0) {
                  dispatch(emptyToCartUser(resp.data));

                  const userOrder = await axios.get(
                    `${process.env.REACT_APP_BACK_URL}/get/order/users/${resp.data.id}/cart`
                  );

                  dispatch(
                    pushStorageToCartUser(
                      orderProducts,
                      resp.data,
                      userOrder.data.id
                    )
                  );
                  localStorage.clear();
                  localStorage.setItem(
                    "CurrentUser",
                    JSON.stringify(resp.data)
                  );
                  dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
                } else {
                  localStorage.setItem(
                    "CurrentUser",
                    JSON.stringify(resp.data)
                  );
                  dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
                }
              }
            } else {
              throw "windowsOutClick";
            }
          });
        }
        else {
          var orderProducts = JSON.parse(
            localStorage.getItem("orderProducts")
          );
          if (orderProducts?.length > 0) {
            dispatch(emptyToCartUser(resp.data));

            const userOrder = await axios.get(
              `${process.env.REACT_APP_BACK_URL}/get/order/users/${resp.data.id}/cart`
            );

            dispatch(
              pushStorageToCartUser(
                orderProducts,
                resp.data,
                userOrder.data.id
              )
            );
            localStorage.clear();
            localStorage.setItem(
              "CurrentUser",
              JSON.stringify(resp.data)
            );
            dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
          } else {
            localStorage.setItem(
              "CurrentUser",
              JSON.stringify(resp.data)
            );
            dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
          }
        }
      })
      .catch((error) => {
        if (error === "banned")
          return dispatch(setError("Has sido baneado. No te puedes logear"));
        if (error === "wrongCode")
          return dispatch(setError("Wrong code. Try again"));
        if (error === "windowsOutClick")
          return dispatch(setError("You don't type any code"));
      });
  };
};

export const startGoogleLogin = () => {

  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(async ({ user }) => {

        const findUser = await axios.get(
          `${process.env.REACT_APP_BACK_URL}/get/user?email=${user.email}`
        );
        
        if (findUser.data?.roleId === 103) throw "banned";        

        return [findUser, user]
      })

      .then(async (respUser) => {

        if (respUser[0].data?.authy) {

          await Swal.fire({
            title: 'Enter your Authy code',
            input: 'text',
            inputLabel: 'Authy code',
            inputPlaceholder: 'Enter your Authy code',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          }).then(async (result) => {
            if (result.isDismissed === false && result.isConfirmed === true) {

              const validation = await axios.post(
                `${process.env.REACT_APP_BACK_URL}/post/2fa/validation`,
                { email: respUser[0].data?.email, code: result.value }
              );

              if (validation.data.success === false) {
                throw "wrongCode";
              }

              else {
                //login                
                const respUserLog = await axios.get(
                  `${process.env.REACT_APP_BACK_URL}/get/user?email=${respUser[1].email}`
                );

                //se busca el carrito del localStorage
                var orderProducts = JSON.parse(localStorage.getItem("orderProducts"));

                //si hay data en el carrito
                if (orderProducts?.length > 0) {
                  dispatch(emptyToCartUser(respUserLog.data));

                  const userOrder = await axios.get(
                    `${process.env.REACT_APP_BACK_URL}/get/order/users/${respUserLog.data.id}/cart`
                  );

                  dispatch(
                    pushStorageToCartUser(
                      orderProducts,
                      respUserLog.data,
                      userOrder.data?.id
                    )
                  );
                  
                  localStorage.clear();
                  localStorage.setItem("CurrentUser", JSON.stringify(respUserLog.data));
                  dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
                } else {
                  localStorage.setItem("CurrentUser", JSON.stringify(respUserLog.data));
                  dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
                }
              }
            }
            else {
              throw "windowsOutClick";
            }
          })
        }
        else {

          //new user
          if (respUser[0].data === null) {

            const resp = await axios({
              method: "post",
              url: `${process.env.REACT_APP_BACK_URL}/post/user`,
              data: {
                name: respUser[1].displayName,
                email: respUser[1].email,
                isGuest: false,
                profilePic: respUser[1].photoURL,
              },
            });

            const currentProducts = JSON.parse(
              localStorage.getItem("orderProducts")
            );

            //si hay data en el carrito, se crea una orden nueva con los productos
            if (currentProducts) {
              dispatch(pushStorageToCartUser(currentProducts, resp.data));
            }
            localStorage.clear();
            localStorage.setItem("CurrentUser", JSON.stringify(resp.data));
            dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
          }

          //login
          else {
            const respUserLog = await axios.get(
              `${process.env.REACT_APP_BACK_URL}/get/user?email=${respUser[1].email}`
            );

            //se busca el carrito del localStorage
            var orderProducts = JSON.parse(localStorage.getItem("orderProducts"));

            //si hay data en el carrito
            if (orderProducts?.length > 0) {
              dispatch(emptyToCartUser(respUserLog.data));

              const userOrder = await axios.get(
                `${process.env.REACT_APP_BACK_URL}/get/order/users/${respUserLog.data.id}/cart`
              );

              dispatch(
                pushStorageToCartUser(
                  orderProducts,
                  respUserLog.data,
                  userOrder.data?.id
                )
              );
              localStorage.clear();
              localStorage.setItem("CurrentUser", JSON.stringify(respUserLog.data));
              dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
            } else {
              localStorage.setItem("CurrentUser", JSON.stringify(respUserLog.data));
              dispatch({ type: TYPES.AUTH_LOGIN, payload: true });
            }
          }
        }
      })
      .catch((error) => {
        if (error === "banned")
          return dispatch(setError("Has sido baneado. No te puedes logear"));
        if (error === "wrongCode")
          return dispatch(setError("Wrong code. Try again"));
        if (error === "windowsOutClick")
          return dispatch(setError("You don't type any code"));
      });
  };
};

export const resetPassword = (email) => {
  return (dispatch) => {
    if (email === "") {
      dispatch(setError("Por favor, Ingrese un correo electrónico."));
    } else if (/\S+@\S+\.\S+/.test(email)) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          dispatch(
            setError({
              title: "Perfecto!",
              msg: `El enlace para cambiar su contraseña se envió al correo electrónico: ${email}`,
              icon: "success",
            })
          );
        })
        .catch((error) => {
          if (error.a === null) {
            dispatch(setError(`No hay usuario registrado con el correo electrónico:  ${email}`));
          } else {
            dispatch(setError(`Ups... algo salio mal... Comuníquese con soporte, Gracias.`));
          }
        });
    } else {
      dispatch(setError("El correo electrónico no es valido."));
    }
  };
};
