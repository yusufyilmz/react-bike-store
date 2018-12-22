

import React from 'react';
import { Li } from './style';
import { BikeImage } from '../BikeImage'
import { BikeDetail } from '../BikeDetail'


export const Bike = ({ ...bike }) => {
    return (
        <Li>
            <BikeImage
                url={bike.url}
                imageUrl={bike.media.image_url}
                imageAlt={bike.title} />
            <BikeDetail
                title={bike.title}
                sourceUrl ={bike.source && bike.source.html_url}
                address={bike.address}
                occured={bike.occurred_at}
                description={bike.description} />
        </Li>
    );
}
export default Bike;
