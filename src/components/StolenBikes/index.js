

import React, { Component, Fragment } from 'react';
import StolenBikesContainer from '../../containers/stolenBikesContainer';
import BikeList from '../BikeList';
import { Error } from '../Error';
import { Loader } from '../Loader';

class StolenBikes extends Component {

    render() {
        return (
            <StolenBikesContainer>
                {({ bikes, error, loading }) => (
                    <Fragment>
                        <Error error={error} />
                        <Loader loading={loading} />
                        <BikeList bikes={bikes} />
                    </Fragment>
                )}
            </StolenBikesContainer>
        );
    }
}

export default StolenBikes;
