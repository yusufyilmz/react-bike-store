import React, { Fragment } from 'react';
import uniqueid from 'lodash.uniqueid';
import { BERLIN_CENTER } from '../../constants/locations';
import GoogleMapReact from 'google-map-react';
import {Div, Marker} from './style';

export const Map = ({ address }) => (
    <Div>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: process.env.REACT_APP_GMAP_KEY,
            }}
            defaultCenter={BERLIN_CENTER}
            defaultZoom={6}>
            <Marker
                key={uniqueid()}
                address={address.address}
                lat={address.geolocation.lat}
                lng={address.geolocation.lng} />

        </GoogleMapReact>
    </Div>
);
