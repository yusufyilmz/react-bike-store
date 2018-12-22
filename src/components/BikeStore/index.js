

import React, { Component, Fragment } from 'react';
import BikeStoreContainer from '../../containers/bikeStoreContainer';
import Bike from '../Bike';

import { ListWrapper } from './style';

class BikeStore extends Component {

    render() {
        return (

            <BikeStoreContainer>
                {({ bikes }) => (

                )}

            </BikeStoreContainer>
        );
    }
}

export default BikeStore;
