
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STOLEN_BIKES_FETCH:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: false
            }
        case actionTypes.STOLEN_BIKES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.STOLEN_BIKES_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state;
    }

}