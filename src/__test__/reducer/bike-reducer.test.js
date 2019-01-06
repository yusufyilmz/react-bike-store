import mapReducer from '../../reducers/bike-reducer';
import * as actionTypes from '../../constants/actionTypes';


let initialState;
let bikes;
let address;

beforeEach(() => {
    initialState = {
        items: [],
        loading: false,
        error: false,
        activeBike: null,
        address: null,
        filterData: []
    }
    bikes = [
        {
            "id": 94547,
            "title": "Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)",
            "description": "Locked cellar in Warthestrasse 8, Kryptonite U-lock with cable both tyres locked to frame. Someone got in and took the whole thing as well as forced some storage doors open. ",
            "address": "Berlin, 12051, DE",
            "occurred_at": 1543309200,
            "updated_at": 1546313312,
            "url": "https://bikewise.org/api/v1/incidents/94547",
            "source": {
                "name": "BikeIndex.org",
                "html_url": "https://bikeindex.org/bikes/480323",
                "api_url": "https://bikeindex.org/api/v1/bikes/480323"
            },
            "media": {
                "image_url": null,
                "image_url_thumb": null
            },
            "location_type": null,
            "location_description": null,
            "type": "Theft",
            "type_properties": null
        }]

    address = {
        address: 'berlin',
        geocoding: {
            lat: 55.5555,
            lng: 54.544
        }
    }

});


describe('INITIAL_STATE', () => {
    test('is correct', () => {
        const action = { type: 'dummy_action' };
        expect(mapReducer(undefined, action)).toEqual(initialState);
    });
});



describe('STOLEN_BIKES_REQUEST', () => {
    test('returns correct state', () => {

        const action = { type: actionTypes.STOLEN_BIKES_REQUEST, payload: bikes };
        expect(mapReducer(undefined, action)).toEqual({ ...initialState, loading: true });

    });
});


describe('STOLEN_BIKES_ERROR', () => {
    test('returns correct state', () => {

        const action = { type: actionTypes.STOLEN_BIKES_ERROR, payload: bikes };
        expect(mapReducer(undefined, action)).toEqual({ ...initialState, error: true });

    });
});


describe('SHOW_BIKE_DETAIL', () => {
    test('returns correct state', () => {

        const action = { type: actionTypes.SHOW_BIKE_DETAIL, payload: bikes[0] };
        expect(mapReducer(undefined, action)).toEqual({ ...initialState, activeBike: bikes[0] });

    });
});


describe('STOLEN_BIKE_ADDRESS', () => {
    test('returns correct state', () => {
        const action = { type: actionTypes.STOLEN_BIKE_ADDRESS, payload: address };
        expect(mapReducer(undefined, action)).toEqual({ ...initialState, address });

    });
});

describe('STOLEN_BIKES_FETCH', () => {
    test('returns correct state', () => {

        const action = { type: actionTypes.STOLEN_BIKES_FETCH, payload: bikes };
        expect(mapReducer(undefined, action)).toEqual({
            ...initialState, items: action.payload.map(bike => {
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
            }),
        });

    });
});
