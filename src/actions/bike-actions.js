import * as actionTypes from '../constants/actionTypes';
import BikeWiseAPI from '../api/bikeWiseAPI';



function fetchBikeStoreItems(items) {
    return {
        type: actionTypes.STOLEN_BIKES_FETCH,
        payload: items
    }
}

function requestBikeStoreItems() {
    return {
        type: actionTypes.STOLEN_BIKES_REQUEST,
    }
}

function fetchBikeStoreError(error) {
    return {
        type: actionTypes.STOLEN_BIKES_ERROR,
        payload: error
    }
}


export const getStolenBikes = (bike) => async (dispatch, getState) => {


    try {

        dispatch(requestBikeStoreItems())
        const response = await BikeWiseAPI.get('/incidents?page=1&per_page=4&proximity_square=100')
        if (response.status === 200 && response.data.incidents) {
            dispatch(fetchBikeStoreItems(response.data.incidents))
        }
        else {
            dispatch(fetchBikeStoreError(response.data.error));
        }
    }
    catch (e) {
        dispatch(fetchBikeStoreError("An error occured"))
    }
}