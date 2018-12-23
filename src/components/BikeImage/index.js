

import React from 'react';
import Bike from '../Bike';
import { Img, A } from './style';



export const BikeImage = ({ url, imageUrl, imageAlt }) => {

    const image = imageUrl ? imageUrl :  "http://eni-learning.com/php-custom/img/no-image.png";
    return (
        <A href={url}>
            <Img
                alt={imageAlt}
                src={image} />
        </A>
    );
}

