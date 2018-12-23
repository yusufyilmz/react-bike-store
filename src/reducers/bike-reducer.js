
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STOLEN_BIKES_FETCH:

            // var allItems =  action.payload;
            // var items = allItems.length > 0 ? allItems[0] : [];

            // return {
            //     ...state,
            //     allItems: allItems,
            //     items: items,
            //     loading: false,
            //     error: false
            // }

            const bikes = action.payload.map(bike =>  {
                return {
                    url :  bike.url,
                    imageUrl : bike.media.image_url,
                    title : bike.title,
                    sourceUrl : bike.source && bike.source.html_url,
                    address : bike.address,
                    occurred : bike.occurred_at, 
                    updated : bike.updated_at, 
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

        default:
            return state;
    }

}