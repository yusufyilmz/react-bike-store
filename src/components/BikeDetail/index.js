






import React from 'react';
import Bike from '../Bike';
import {Div, H5, Ul} from './style';


export const BikeDetail = ({ title, description, occured, sourceUrl, address }) => {


    const occuredDate = new Date(occured * 1000).toDateString();

    return (
        <Div>
            <a href="#">
                <H5>
                    <strong> {title} </strong>
                </H5>
            </a>
            <Ul>
                <li>
                    <span>{description}</span> 
                </li>
                <br/>
                <li>
                    <span>{occuredDate} - {address} </span> 
                </li>
            </Ul>
        </Div>
    );
}
