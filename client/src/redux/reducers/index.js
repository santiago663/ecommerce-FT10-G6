import * as TYPES from '../types/index';

const initialState = {
  artistCache: [],
  artworkCache: [],
  productCache: [],
  testCache: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_PRODUCTS:
      return {
        ...state,
        artworkCache: action.payload,
      };

    case TYPES.GET_ONE_PRODUCT:
      return {
        ...state,
        productCache: action.payload,
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
