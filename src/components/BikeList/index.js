

import React, { Fragment } from 'react';
import Bike from '../Bike';
import { EmptyResult } from '../EmptyResult';
import { Ul, H4, Span } from './style';
import uniqueid from 'lodash.uniqueid';

const BikeList = ({ bikes, onselectBike }) => {

    return (
        <Fragment>
            {bikes.length === 0 ? <EmptyResult /> :
                <Ul>
                    <H4><Span>Total: {bikes.length}</Span></H4>
                    {bikes.map(bike => {
                        return <Bike onClick={onselectBike} key={uniqueid()} {...bike} />
                    })}
                </Ul>
            }
        </Fragment>
    );
}

export default BikeList;
