/*eslint-disable*/

import * as TYPES from '../types/index';
import * as TYPESUP from '../types/typesUpgrade';

const initialState = {

  artistCache: [],
  allArtistCache: [],
};

export default function reducerArtist(state = initialState, action){
    switch (action.type) {

        case TYPES.GET_ALL_AUTHORS:
        case TYPESUP.UPGRADE_EDIT_AUTHOR:
            return {
              ...state,
              allArtistCache: action.payload,
            };
            case TYPES.NEW_AUTHOR:
                return {
                  ...state,
                  artistCache: [...state.artistCache].concat(action.payload)
                }   
        default:
            return state;
    }
}
