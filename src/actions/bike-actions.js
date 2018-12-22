import * as actionTypes from '../constants/actionTypes';
import BikeWiseAPI from '../api/bikeWiseAPI';



function fetchBikeStoreItems(items) {
    return {
        type: actionTypes.BIKE_STORE_FETCH,
        payload: items
    }
}


export const getStolenBikes = (bike) => async (dispatch, getState) => {


    try {

        const response = await BikeWiseAPI.get('/incidents?page=1&proximity_square=100')

        if (response.status === 200) {

            console.log(response.data);
            dispatch(fetchBikeStoreItems(response.data))
        }
        else {
            console.log("error");

        }
    }
    catch (e) {
        console.log(e)
    }
}