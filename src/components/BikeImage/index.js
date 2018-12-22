

import React from 'react';
import Bike from '../Bike';
import { Img, A } from './style';



export const BikeImage = ({ url, imageUrl, imageAlt }) => {

    return (
        <A href={url}>
            <Img
                alt={imageAlt}
                src={imageUrl} />
        </A>
    );
}

