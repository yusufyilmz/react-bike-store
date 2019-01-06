
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: false,
    activeBike: null,
    address: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STOLEN_BIKES_FETCH:
            const bikes = action.payload.map(bike => {
                return {
                    url: bike.url,
                    imageUrl: bike.media.image_url,
                    title: bike.title,
                    sourceUrl: bike.source && bike.source.html_url,
                    address: bike.address,
                    occurred: bike.occurred_at,
                    updated: bike.updated_at,
                    description: bike.description
                }
            })

            return {
                ...state,
                items: bikes,
                allItems: bikes,
                loading: false,
                error: false
            }

        case actionTypes.STOLEN_BIKES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

        case actionTypes.STOLEN_BIKES_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                items: []
            }

        case actionTypes.STOLEN_BIKES_FILTERED:
            return {
                ...state,
                error: false,
                loading: false,
                items: action.payload
            }
        case actionTypes.SHOW_BIKE_DETAIL:
            return {
                ...state,
                activeBike: action.payload,
            }
        case actionTypes.CLOSE_BIKE_DETAIL:
            return {
                ...state,
                activeBike: null,
            }
        case actionTypes.STOLEN_BIKE_ADDRESS:
            return {
                ...state,
                address: action.payload,
                loading: false,
            }
        default:
            return state;
    }

}