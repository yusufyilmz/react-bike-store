

import React from 'react';
import Bike from '../Bike';
import { Ul, H4, Span } from './style';
import uniqueid from 'lodash.uniqueid';

const BikeList = ({ bikes }) => {

    return (
        <Ul>
            <H4><Span>Total: {bikes.length}</Span></H4>
            {bikes.map(bike => {
                return <Bike key={uniqueid()} {...bike} />
            })}
        </Ul>
    );
}

export default BikeList;
