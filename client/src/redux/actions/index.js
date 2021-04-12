/*eslint-disable*/
import axios from 'axios';
import * as TYPES from '../types/index';
import db from '../../db';


//LOADING ACTIONS

const requestData = () => ({
  type: TYPES.REQUEST_DATA,
})
const requestSuccess = () => ({
  type: TYPES.REQUEST_SUCCESS,
})

/* ----------------------*/
/* LOCAL FAKE-DB ACTIONS */
/* ----------------------*/

export const getAllProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/products');
  if (response.status === 200) {
    dispatch({ type: TYPES.GET_ALL_PRODUCTS, payload: response.data });
  }
};

export const getAllAuthors = () => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/author');
      dispatch({
        type: TYPES.GET_ALL_AUTHORS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getAllCategories = () => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/category');
      dispatch({
        type: TYPES.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getAllSeries = () => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get('http://localhost:3001/serie');
      dispatch({
        type: TYPES.GET_ALL_SERIES,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getOneProduct = (id) => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get(`http://localhost:3001/products/:${id}`);
      dispatch({
        type: TYPES.GET_ONE_PRODUCT,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error.message);
    }
  }
);

// esta no sirve porque se usaba con los datos hardcodeados...modificar \\
export const filterArtists = () => (
  (dispatch) => {
    const response = db.map((artwork) => ({
      artist: artwork.artist,
      original: artwork.origin,
    }));

    dispatch({
      type: TYPES.FILTER_ARTISTS,
      payload: response,
    });
  }
);

export const searchByArtist = () => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get('http://jsonplaceholder.typicode.com/users');
      dispatch({
        type: SEARCH_BY_ARTIST,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error);
    }
  }
);

export const searchByTitle = (keyword) => (
  async (dispatch) => {
    try {
      dispatch(requestData())
      const response = await axios.get(`http://localhost:3001/products/search?keyword=${keyword}`);
      console.log(response)
      dispatch({
        type: TYPES.GET_ALL_PRODUCTS,
        payload: response.data,
      });
      dispatch(requestSuccess())
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
);

// export const addCategory = (form) => (
//   (dispatch) => (
//     axios.post('http://localhost:3001/category', form)
//   )
//     .then((res) => {
//       dispatch({
//         type: TYPES.NEW_CATEGORY,
//         payload: res.data,
//       });
//     })
//     .catch((error) => console.error(error))
// );
export const addCategory = (form) => (
  (dispatch) => {
    try {
      dispatch(requestData())
      axios.post('http://localhost:3001/category', form)
        .then((res) => {
          dispatch({
            type: TYPES.NEW_CATEGORY,
            payload: res.data,
          });
          dispatch(requestSuccess())
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.log(error);
    }
  }
)

//----------------------------------------------------------\\
// export const addAuthor = (author) => (
//   (dispatch) => (
//     axios.post('http://localhost:3001/author', author)
//   )
//     .then((res) => {
//       dispatch({
//         type: TYPES.NEW_AUTHOR,
//         payload: res.data,
//       });
//     }).catch((error) => console.error(error))
// );
export const addAuthor = (author) => (
  (dispatch) => {
    try {
      dispatch(requestData())
      axios.post('http://localhost:3001/author', author)
        .then((res) => {
          dispatch({
            type: TYPES.NEW_AUTHOR,
            payload: res.data,
          });
          dispatch(requestSuccess())
        }).catch((error) => console.error(error))
    } catch (error) {
      console.log(error);
    }
  }
)
//------------------------------------------------------\\