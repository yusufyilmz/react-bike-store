import * as actionTypes from '../constants/actionTypes';
import BikeWiseAPI from '../api/bikeWiseAPI';
import GoogleMapAPI from '../api/googleMapAPI';


const fetchBikeStoreItems = (items) => {
    return {
        type: actionTypes.STOLEN_BIKES_FETCH,
        payload: items
    }
}


const fetchBikeAddress = (items) => {
    return {
        type: actionTypes.STOLEN_BIKE_ADDRESS,
        payload: items
    }
}

const requestBikeStoreItems = () => {
    return {
        type: actionTypes.STOLEN_BIKES_REQUEST,
    }
}

const fetchBikeStoreError = (error) => {
    return {
        type: actionTypes.STOLEN_BIKES_ERROR,
        payload: error
    }
}

const stolenBikesFiltered = (bikes) => {
    return {
        type: actionTypes.STOLEN_BIKES_FILTERED,
        payload: bikes
    }
}

export const selectBike = (bike) => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.SHOW_BIKE_DETAIL,
        payload: bike
    })

}


export const closeBikeDetail = () => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.CLOSE_BIKE_DETAIL,
    })

}


export const filterStolenBikes = (filterData) => async (dispatch, getState) => {

    var filterOccuredFrom = new Date(filterData.dateFrom).getTime() / 1000;
    var filterOccuredTo = new Date(filterData.dateTo).getTime() / 1000;
    var filterTitle = filterData.title;

    var parameters = {
        pageNumber: 1,
        filter: true
    }

    if (filterTitle !== '') {
        parameters = { ...parameters, query: filterTitle };
    }

    if (filterOccuredFrom) {
        parameters = { ...parameters, occurredFrom: filterOccuredFrom };
    }

    if (filterOccuredTo) {
        parameters = { ...parameters, occurredTo: filterOccuredTo };
    }

    dispatch(getStolenBikes(parameters))

}

export const getStolenBikes = (parameters) => async (dispatch, getState) => {
    try {

        dispatch(requestBikeStoreItems())
        let url = `/incidents?proximity=berlin&proximity_square=100&page=${parameters.pageNumber}&per_page=10`;

        if (parameters.query) {
            url += `&query=${parameters.query}`
        }

        if (parameters.occurredFrom) {
            url += `&occurred_after=${parameters.occurredFrom}`
        }

        if (parameters.occurredTo) {
            url += `&occurred_before=${parameters.occurredTo}`
        }

        const response = await BikeWiseAPI.get(url)
        console.log(url)
        if (response.status === 200 && response.data.incidents) {
            if (parameters.filter) {
                dispatch(stolenBikesFiltered({ filterData: parameters, items: response.data.incidents }))
            }
            else {
                dispatch(fetchBikeStoreItems(response.data.incidents))
            }
        }
        else {
            dispatch(fetchBikeStoreError(response.data.error));
        }
    }
    catch (e) {
        dispatch(fetchBikeStoreError("An error occured"))
    }
}




export const getGeocodeOfStolenBike = (bike) => async (dispatch, getState) => {

    try {
        const address = bike.address.split(',').map(item => item.trim().split(' ').join('+')).join(',')
        dispatch(requestBikeStoreItems())
        const response = await GoogleMapAPI.get(`/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GMAP_KEY}`)
        console.log(response.data)
        if (response.status === 200 && response.data.status === 'OK') {
            dispatch(fetchBikeAddress({
                address: response.data.results[0].formatted_address,
                geolocation: response.data.results[0].geometry.location
            }))
        }
        else {
            dispatch(fetchBikeStoreError(response.data.error));
        }
    }
    catch (e) {
        dispatch(fetchBikeStoreError("An error occured"))
    }
}

