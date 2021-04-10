import axios from 'axios';

import * as TYPES from '../types/index';
import db from '../../db';

/* ----------------------*/
/* LOCAL FAKE-DB ACTIONS */
/* ----------------------*/

export const getAll = () => (
  (dispatch) => {
    const response = db;
    dispatch({
      type: TYPES.GET_ALL,
      payload: response,
    });
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
