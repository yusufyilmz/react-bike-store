

import React, { Component, Fragment } from 'react';
import Input from '../Input';
import { Map } from '../Map';
import StolenBikeDetailContainer from '../../containers/stolenBikeDetailContainer';


class StolenBikeDetail extends Component {

    getDate(occured) {
        console.log(occured)
        return new Date(occured * 1000).toDateString();

    }
    render() {
        return (
            <StolenBikeDetailContainer>
                {({ activeBike, closeBikeDetail, address }) => (
                    activeBike && (
                        <div>
                            <h2>{activeBike.title}</h2>
                            <h3>{this.getDate(activeBike.occurred)} at {activeBike.address}</h3>
                            {address && <Map address={address} />}
                            {activeBike.description &&
                                <Fragment>
                                    <h2>DESCRIPTION OF INCIDENT</h2>
                                    <p>{activeBike.description}</p>
                                </Fragment>
                            }
                            <Input float={"left"} type="button" onClick={closeBikeDetail} value="Back" />
                        </div>
                    )
                )}

            </StolenBikeDetailContainer>
        )
    }
}

export default StolenBikeDetail;