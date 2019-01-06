

import React from 'react';
import { Li } from './style';
import { BikeImage } from '../BikeImage'
import { BikeDetail } from '../BikeDetail'


export const Bike = ({onClick, ...bike }) => {
    return (
        <Li onClick={() => onClick(bike)}>
            <BikeImage
                imageUrl={bike.imageUrl}
                imageAlt={bike.title} />
            <BikeDetail
                title={bike.title}
                sourceUrl={bike.sourceUrl}
                address={bike.address}
                occured={bike.occurred}
                description={bike.description} />
        </Li>
    );
}
export default Bike;
