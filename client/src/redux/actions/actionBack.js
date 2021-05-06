/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import { requestData, requestSuccess } from './request.js'


/* ----------------------*/
/* LOCAL FAKE-DB ACTIONS */
/* ----------------------*/

export const getAllProducts = () => (

  async (dispatch) => {

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/product`
      );
      if (response.status === 200) {
        dispatch({
          type: TYPES.GET_ALL_PRODUCTS,
          payload: response.data
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.GET_ALL_PRODUCTS_ERROR,
        payload: error,
      });
    }
  }
);

export const getAllAuthors = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/author`
      );
      dispatch({
        type: TYPES.GET_ALL_AUTHORS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_AUTHORS_ERROR,
        payload: error,
      });
    }
  }
);

export const getAllCategories = () => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/category`
      );
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES_ERROR,
        payload: error,
      });
    }
  }
);

export const getAllSeries = () => (

  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/serie`
      );
      dispatch({
        type: TYPES.GET_ALL_SERIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ALL_SERIES_ERROR,
        payload: error,
      });
    }
  }
);

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

export const getOneProduct = (id) => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/product/${id}`
      );
      dispatch({
        type: TYPES.GET_ONE_PRODUCT,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: TYPES.GET_ONE_PRODUCT_ERROR,
        payload: error,
      });
    }
  }
);

export const searchByTitle = (keyword) => (

  async (dispatch) => {

    try {
      dispatch(requestData())
      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/get/product/search?keyword=${keyword}`
      );

      response.data.length !== 0 && dispatch({
        type: TYPES.SET_SEARCH_PRODUCTS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.SET_SEARCH_PRODUCTS_ERROR,
        payload: error,
      });
    }
  }
);

export const addCategory = (form) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/post/category`, form)
        .then((res) => {
          dispatch({
            type: TYPES.POST_NEW_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.POST_NEW_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)

export const addAuthor = (author) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/post/author`, author)
        .then((res) => {
          dispatch({
            type: TYPES.NEW_AUTHOR,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      dispatch({
        type: TYPES.NEW_AUTHOR_ERROR,
        payload: error,
      });
    }
  }
)

export const addProducts = (product) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/post/product`, product)
        .then((res) => {
          dispatch({
            type: TYPES.POST_NEW_PRODUCT,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.POST_NEW_PRODUCT_ERROR,
        payload: error,
      });
    }
  }
)

//Editar o Eliminar Productos desde Admin
export const editProductCategory = (productId, value) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(
          `${process.env.REACT_APP_BACK_URL}/put/product/${productId}/category/${value}`
        )
        .then((res) => {
          dispatch({
            type: TYPES.PUT_EDIT_PRODUCT_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_EDIT_PRODUCT_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)

export const editProductByBody = (productId, product) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(
          `${process.env.REACT_APP_BACK_URL}/put/product/${productId}`,
          product
        )
        .then((res) => {
          dispatch({
            type: TYPES.PUT_EDIT_PRODUCT_BYID,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_EDIT_PRODUCT_BYID_ERROR,
        payload: error,
      });
    }
  }
)

export const editAuthor = (authorId, author) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(`${process.env.REACT_APP_BACK_URL}/put/author/${authorId}`, author)
        .then((res) => {
          dispatch({
            type: TYPES.PUT_EDIT_AUTHOR,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_EDIT_AUTHOR_ERROR,
        payload: error,
      });
    }
  }
)
export const editCategory = (categoryId, category) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(
          `${process.env.REACT_APP_BACK_URL}/put/category/${categoryId}`,
          category
        )
        .then((res) => {
          dispatch({
            type: TYPES.PUT_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.PUT_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)
export const editUser = (userId, user) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .put(`${process.env.REACT_APP_BACK_URL}/put/user/${userId}`, user)
        .then((res) => {
          dispatch({
            type: TYPES.PUT_USER,
            payload: res,
          });
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

export const deleteProduct = (productId) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .delete(`${process.env.REACT_APP_BACK_URL}/delete/product/${productId}`)
        .then((res) => {
          dispatch({
            type: TYPES.DELETE_ONE_PRODUCT,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.DELETE_ONE_PRODUCT_ERROR,
        payload: error,
      });
    }
  }
)

export const deleteProductCategory = (productId, id) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .delete(
          `${process.env.REACT_APP_BACK_URL}/delete/product/${productId}/category/${id}`
        )
        .then((res) => {
          dispatch({
            type: TYPES.DELETE_PRODUCT_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.DELETE_ONE_PRODUCT_ERROR,
        payload: error,
      });
    }
  }
)

export const deleteAuthor = (authorId) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .delete(`${process.env.REACT_APP_BACK_URL}/delete/author/${authorId}`)
        .then((res) => {
          dispatch({
            type: TYPES.DELETE_AUTHOR,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.DELETE_AUTHOR_ERROR,
        payload: error,
      });
    }
  }
)

export const deleteCategory = (categoryId) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .delete(
          `${process.env.REACT_APP_BACK_URL}/delete/category/${categoryId}`
        )
        .then((res) => {
          dispatch({
            type: TYPES.DELETE_CATEGORY,
            payload: res,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.DELETE_CATEGORY_ERROR,
        payload: error,
      });
    }
  }
)

export const getAllOrders = () => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .get(`${process.env.REACT_APP_BACK_URL}/get/order`)
        .then((res) => {
          dispatch({
            type: TYPES.GET_ALL_ORDERS,
            payload: res.data,
          });
          dispatch(requestSuccess());
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.GET_ALL_ORDERS_ERROR,
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

export const getProductReview = (productId) => (

  (dispatch) => {

    try {
      dispatch(requestData())
      axios
        .get(
          `${process.env.REACT_APP_BACK_URL}/get/review?productId=${productId}`
        )
        .then((res) => {
          dispatch({
            type: TYPES.GET_PRODUCT_REVIEW,
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

export const postUserReview = (productId, userId, review) => {
  return (dispatch) => {
    try {
            
      axios
        .post(
          `${process.env.REACT_APP_BACK_URL}/post/review?productId=${productId}&userId=${userId}`,
          review
        )
        .then((res) => {
          dispatch({
            type: TYPES.POST_NEW_USER_REVIEW,
            payload: res.data,
          });
        })
        .catch((error) => console.error(error));
    } catch (error) {
      dispatch({
        type: TYPES.POST_NEW_USER_REVIEW_ERROR,
        payload: error,
      });
    }
  }
};

export const updateReviewProduct = (id, newScore) => {
  return async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACK_URL}/put/product/review/${id}`,
        { score: newScore }
      );
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const deleteUserReview = (id) => {
  return async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACK_URL}/delete/review/${id}`
      );
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const editUserReview = (id, review) => {
  return async (dispatch) => {
    try {
      await axios
        .put(`${process.env.REACT_APP_BACK_URL}/put/review/${id}`, review)
        .then((res) => {
          dispatch({
            type: TYPES.PUT_NEW_USER_REVIEW,
            payload: res.data,
          });
        });
    }
    catch (error) {
      console.log(error)
    }
  }
};

export const editProductStock = (stock) => {
  return async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACK_URL}/put/product/stock/edit`,
        stock
      );
    }
    catch (error) {
      console.log(error)
    }
  }
};


export const sendDiscountToBack = (objectToApplyDiscount) => {

		return (dispatch) => {
        axios.post(`${process.env.REACT_APP_BACK_URL}/post/discount`, objectToApplyDiscount)
        .then((res)=>{
          //action
        })
          .catch((e) => console.log(e));
	}
				
	
	
}; 

