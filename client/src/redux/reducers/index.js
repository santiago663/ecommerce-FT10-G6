import * as TYPES from '../types/index';

const initialState = {
  artistCache: [],
  artworkCache: [],
  testCache: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL:
      return {
        ...state,
        artworkCache: action.payload,
      };

    case TYPES.FILTER_ARTISTS:
      return {
        ...state,
        artistCache: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
