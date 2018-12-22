
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
            }
       
        default:
            return state;
    }

}