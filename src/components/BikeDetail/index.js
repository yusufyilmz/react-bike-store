






import React from 'react';
import Bike from '../Bike';
import {Div, H5, Ul} from './style';


export const BikeDetail = ({ title, description, occured, sourceUrl, address }) => {

    return (
        <Div>
            <a href={sourceUrl}>
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
                    <span>{occured} - {address} </span> 
                </li>
            </Ul>
        </Div>
    );
}






// <div class="bike-information multi-attr-lists">
//     <h5 class="title-link">
//         <a href="https://bikeindex.org/bikes/486269">
//             <strong>
//                 2015 Centurion
//       </strong>
//             Backfire Race 1000.27 metallic-grau/schwarz-lime 51 cm
//       </a>
//     </h5>
//     <ul class="attr-list">
//         <li><span class="attr-title">Serial</span>AW470157</li>
//         <li><span class="attr-title">Primary colors</span>Silver, gray or bare metal and Green</li>
//     </ul>
//     <ul class="attr-list">
//         <li>
//             <span class="attr-title">
//                 Stolen
//          </span>
//             <span class="">Dec 3rd, 2am</span>
//         </li>
//         <li><span class="attr-title">Location</span>Munich - DE</li>
//     </ul>
// </div>