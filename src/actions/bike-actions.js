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


export const  selectBike = (bike) => async (dispatch, getState) => {
    
    dispatch({
        type: actionTypes.SHOW_BIKE_DETAIL,
        payload: bike
    })

}



export const  closeBikeDetail = () => async (dispatch, getState) => {
    
    dispatch({
        type: actionTypes.CLOSE_BIKE_DETAIL,
    })

}


export const filterStolenBikes = (filterData) => async (dispatch, getState) => {

    var bikes = getState().bike.allItems;
    var filterOccuredFrom = new Date(filterData.dateFrom).getTime() / 1000;
    var filterOccuredTo = new Date(filterData.dateTo).getTime() / 1000;
    var filterDescription = filterData.description;
    var filteredBikes = [];

    console.log(filterDescription)
    console.log(filterOccuredFrom)
    console.log(filterOccuredTo)

    if (filterDescription !== '' && filterOccuredFrom && filterOccuredTo) {
        console.log(1)
        filteredBikes = bikes.filter(bike =>
            bike.description && bike.description.toLowerCase().indexOf(filterData.description.toLowerCase()) !== -1 &&
            bike.occurred > filterOccuredFrom &&
            bike.occurred < filterOccuredTo
        );
    }
    else if (filterDescription !== '' && filterOccuredFrom) {
        console.log(2)

        filteredBikes = bikes.filter(bike =>
            bike.title && bike.title.toLowerCase().indexOf(filterData.title.toLowerCase()) !== -1 &&
            bike.occurred > filterOccuredFrom
        );
    }
    else if (filterDescription !== '' && filterOccuredTo) {
        console.log(3)

        filteredBikes = bikes.filter(bike =>
            bike.title && bike.title.toLowerCase().indexOf(filterData.title.toLowerCase()) !== -1 &&
            bike.occurred < filterOccuredTo
        );
    }
    else if (filterOccuredFrom&& filterOccuredTo!== '') {
        console.log(4)

        filteredBikes = bikes.filter(bike =>
            bike.occurred > filterOccuredFrom &&
            bike.occurred < filterOccuredTo
        );
    }
    else if (filterDescription !== '') {
        console.log(5)

        filteredBikes = bikes.filter(bike =>
            bike.title && bike.title.toLowerCase().indexOf(filterData.title.toLowerCase()) !== -1
        );
    }
    else if (filterOccuredFrom) {
        console.log(6)

        filteredBikes = bikes.filter(bike =>
            bike.occurred > filterOccuredFrom
        );
    }
    else if (filterOccuredTo) {
        console.log(7)

        filteredBikes = bikes.filter(bike =>
            bike.occurred < filterOccuredTo
        );
    }

    console.log(filteredBikes)
    dispatch(stolenBikesFiltered(filteredBikes))

}


export const getStolenBikes = (pageNumber) => async (dispatch, getState) => {


    try {

        dispatch(requestBikeStoreItems())

        const response = await BikeWiseAPI.get(`/incidents?proximity=berlin&proximity_square=100&page=${pageNumber}&per_page=10`)

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




export const  getGeocodeOfStolenBike = (bike) => async (dispatch, getState) => {

    try {
        const address = bike.address.split(',').map(item => item.trim().split(' ').join('+')).join(',')
        dispatch(requestBikeStoreItems())
        const response = await GoogleMapAPI.get(`/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GMAP_KEY}`)
        console.log(response.data)
        if (response.status === 200 && response.data.status === 'OK') {
            dispatch(fetchBikeAddress({ address: response.data.results[0].formatted_address,
                                        geolocation: response.data.results[0].geometry.location}))
        }
        else {
            dispatch(fetchBikeStoreError(response.data.error));
        }
    }
    catch (e) {
        dispatch(fetchBikeStoreError("An error occured"))
    }
}

