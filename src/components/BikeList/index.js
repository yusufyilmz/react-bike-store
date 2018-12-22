

import React from 'react';
import Bike from '../Bike';
import { Ul } from './style';
import uniqueid from 'lodash.uniqueid';

const BikeList = ({ bikes }) => {

    return (
        <Ul>
            {bikes.map(bike => {
                return <Bike key={uniqueid()} {...bike} />
            })}
        </Ul>
    );
}

export default BikeList;
