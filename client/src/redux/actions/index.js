import axios from 'axios';
import * as TYPES from '../types/index';
import db from '../../db';
import dbArtists from '../../dbArtists';

/* ----------------------*/
/* LOCAL FAKE-DB ACTIONS */
/* ----------------------*/

export const getAllProducts = () => (
  async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      dispatch({
        type: TYPES.GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getAllArtists = () => (
  (dispatch) => {
    const response = dbArtists;
    dispatch({
      type: TYPES.GET_ALL_ARTISTS,
      payload: response,
    });
  }
);

export const getOneProduct = (id) => (
  async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/products/:'+id);
      dispatch({
        type: TYPES.GET_ONE_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
);

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

/* -------------------------------------------------- */
/* THESE ACTIONS ARE USELESS UNTIL ROUTES ARE DEFINED */
/* -------------------------------------------------- */

export const searchByArtist = () => (
  async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: 'SEARCH_BY_ARTIST',
        payload: response.data,
      });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
);

export const searchByTitle = () => (
  async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: 'SEARCH_BY_TITLE',
        payload: response.data,
      });
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
);

export const addCategory = (form) => (
  (dispatch) => (
    axios.post('http://localhost:3001/category', form)
  )
    .then((res) => {
      dispatch({
        type: TYPES.NEW_CATEGORY,
        payload: res.data,
      });
    })
    .catch((error) => console.error(error))
);

export const addAuthor = (author) => (
  (dispatch) => (
    axios.post('http://localhost:3001/author', author)
  )
    .then((res) => {
      dispatch({
        type: TYPES.NEW_AUTHOR,
        payload: res.data,
      });
    }).catch((error) => console.error(error))
);

