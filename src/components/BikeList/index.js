

import React from 'react';
import Bike from '../Bike';
import { ListWrapper } from './style';



const BikeList = ({ bikes }) => {

    return (
        <ListWrapper>
            {bikes.map(bike => {
                return <Bike {...bike} />
            })}
        </ListWrapper>
    );
}

export default BikeList;
