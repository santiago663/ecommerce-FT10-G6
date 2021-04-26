/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { addToCart, removeFromCart } from './actionFront'

export const getCurrentOrder = (userId) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/get/order/users/${userId}/cart`)
            .then((resp) => {
                if(resp.data.products){
                    dispatch({ type: TYPES.GET_CURRENT_ORDER, payload: resp.data })
                    resp.data.products.forEach(product => {
                        dispatch(addToCart(product))
                    });
                }

            }).catch(error => {
                console.log(error)
            })
    }
};

export const getAllUserOrders = (userId) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/get/order/users/${userId}`)
            .then((resp) => {
                dispatch({ type: TYPES.GET_ALL_USER_ORDERS, payload: resp.data })
            }).catch(error => {
                console.log(error)
            })
    }
};

export const getDetailOrders = (nroOrder) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/get/order/${nroOrder}`)
            .then((resp) => {
                dispatch({ type: TYPES.GET_DETAIL_ORDER, payload: resp.data })
            }).catch(error => {
                console.log(error)
            })
    }
};

export const addToCartUser = (payload, currentUser, currentOrder, total) => {
    return (dispatch) => {
        const orden = {
            userId: currentUser.id,
            id: currentOrder[0] ? currentOrder[0].id : '',
            total: total,
            price: [Number(payload.price)],
            productId: [payload.id]
        }
        axios.post("http://localhost:3001/post/order", orden)
            .then(resp => {
                dispatch({ type: TYPES.GET_CURRENT_ORDER, payload: resp.data })
                dispatch(addToCart(payload))
            }).catch(error => {
                console.log(error)
            })
    }
}

export const pushStorageToCartUser = (payload, currentUser, orderId) => {
    return (dispatch) => {
        const orden = {
            userId: currentUser.id,
            id: orderId,
            total: payload.reduce(function (a, b) { return a + Number(b.price) }, 0),
            price: payload.map(product => Number(product.price)),
            productId: payload.map(product => product.id),
        }
        axios.post("http://localhost:3001/post/order", orden).
            catch(error => {
                console.log(error)
            })
    }
}


export const removeToCartUser = (payload, currentUser, currentOrder, total) => {
    return (dispatch) => {
        const orden = {
            orderId: currentOrder[0] ? currentOrder[0].id : '',
            total: total,
            productId: payload.id
        }
        axios.put(`http://localhost:3001/put/user/${currentUser.id}/cart`, orden)
            .then(resp => {
                dispatch(removeFromCart(payload))
            }).catch(error => {
                console.log(error)
            })
    }
}


export const emptyToCartUser = (currentUser) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/delete/order/users/${currentUser.id}/cart`)
            .then(resp => {
                dispatch(addToCart())
            }).catch(error => {
                console.log(error)
            })
    }
}

export const formGuestOrder = (form) => {
	return (dispatch) => {
		axios.post('http://localhost:3001/post/order/', form).catch((e) => console.log(e));
	};
}; 

export const formUserOrder = (form) => {
	return (dispatch) => {
		axios.put('http://localhost:3001/put/order/', form).catch((e) => console.log(e));
	};
};
