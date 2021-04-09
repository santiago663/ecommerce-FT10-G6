/* eslint-disable */
import * as TYPES from '../types/index'
const initialState = {
    searchRecetas: [1, 2, 3, 4, 5],
    listaDietas: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case TYPES.REQUEST_DATA: // ejemplo
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}

export default rootReducer