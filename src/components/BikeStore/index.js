

import React, { Component, Fragment } from 'react';
import BikeStoreContainer from '../../containers/bikeStoreContainer';
import BikeList from '../BikeList';

class BikeStore extends Component {

    render() {
        return (

            <BikeStoreContainer>
                {({ bikes }) => (
                    <BikeList bikes = {bikes} />
                )}
            </BikeStoreContainer>
        );
    }
}

export default BikeStore;
