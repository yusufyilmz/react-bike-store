import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions';
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import moxios from 'moxios';
import axios from "axios";
import fetchMock from 'fetch-mock'

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);


describe('MAP_ACTIONS', () => {

    let parameters;

    beforeEach(() => {
        parameters = {
            pageNumber: 1
        }
        // moxios.install();
    });
    afterEach(() => {
        // moxios.uninstall();
        fetchMock.restore()

    });


    // test('addlocationWithAddress with error', () => {

    //     fetchMock.getOnce('/incidents?proximity=berlin&proximity_square=100&page=1&per_page=10', {
    //         body: { todos: ['do something'] },
    //         headers: {
    //             'content-type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         }
    //     })

    //     const expectedActions = [actionTypes.STOLEN_BIKES_REQUEST, actionTypes.STOLEN_BIKES_FETCH];

    //     const store = mockStore({ locations: [] })
    //     return store.dispatch(actions.getStolenBikes(parameters)).then(() => {
    //         expect(store.getActions().map(x => x.type)).toEqual(expectedActions);
    //     });
    // });



    test('select bike with success ', () => {

        const item = { bike: 'test' }
        const expectedActions =
        {
            'payload': item,
            'type': actionTypes.SHOW_BIKE_DETAIL,
        }

        expect(actions.selectBike(item)).toEqual(expectedActions)
    });


    test('close bike detail with success ', () => {

        const expectedActions =
        {
            'type': actionTypes.CLOSE_BIKE_DETAIL,
        }

        expect(actions.closeBikeDetail()).toEqual(expectedActions)
    });


    // describe('a', () => {


    //     moxios.wait(function () {
    //         let request = moxios.requests.mostRecent()
    //         request.respondWith({
    //             status: 200,
    //             response: [
    //                 { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
    //                 { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
    //             ]
    //         }).then(function () {
    //             // let list = document.querySelector('.UserList__Data')
    //             // equal(list.rows.length, 2)
    //             // equal(list.rows[0].cells[0].innerHTML, 'Fred')
    //             // equal(list.rows[1].cells[0].innerHTML, 'Wilma')
    //             // done()
    //         })
    //     })
    // })


})




