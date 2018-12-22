

import React from 'react';
import { Li } from './style';
import { BikeImage } from '../BikeImage'
import { BikeDetail } from '../BikeDetail'


export const Bike = ({...bike}) => {
    return (
        <Li>
            <BikeImage url={bike.url} imageUrl={bike.media.image_url} imageAlt={"a"} />
            <BikeDetail title={bike.title} address={bike.address}  />

        </Li>
    );
}
export default Bike;
