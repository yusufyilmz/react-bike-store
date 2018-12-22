

import React, { Component, Fragment } from 'react';
import StolenBikesContainer from '../../containers/stolenBikesContainer';
import BikeList from '../BikeList';
import {Error} from '../Error';
import {Loader} from '../Loader';

class StolenBikes extends Component {

    
    getComponent(error, loading, bikes) {
        if(error) {
            return <Error/>
        }
        else if (loading) {
            return <Loader/>
        }
        else if(bikes.length === 0) {

        }
        else { 
            return <BikeList bikes={bikes} />
        }
    } 

    render() {
        return (
            <StolenBikesContainer>
                {({ bikes, error, loading }) => (
                    <Fragment>
                        {this.getComponent(error, loading, bikes)}
                    </Fragment>
                )}
            </StolenBikesContainer>
        );
    }
}

export default StolenBikes;
