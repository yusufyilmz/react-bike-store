

import React from 'react';
import Bike from '../Bike';
import { Ul } from './style';

const BikeList = ({ bikes }) => {

    return (
        <Ul>
            {bikes.map(bike => {
                return <Bike {...bike} />
            })}
        </Ul>
    );
}

export default BikeList;
