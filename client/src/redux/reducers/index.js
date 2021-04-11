/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
  artistCache: [],
  artworkCache: [],
  productCache: [],
  testCache: [],
  categories:[]
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
      case TYPES.NEW_CATEGORY:
        return {
            ...state,
            categories:[...state.categories].concat(action.payload),

        }
        case TYPES.NEW_AUTHOR:
            return {
                ...state,
                artistCache: [...state.artistCache].concat(action.payload)
            }

    default:
      return state;
  }
};

export default rootReducer;
