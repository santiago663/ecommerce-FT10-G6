/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
 
  categories: [],
  allCategoriesCache: [],
};

export default function reducerCategories (state = initialState, action){

  switch (action.type) {
      
    case TYPES.GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategoriesCache: action.payload,
      };

    case TYPES.NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories].concat(action.payload),

      }

    default:
      return state;
  }
};