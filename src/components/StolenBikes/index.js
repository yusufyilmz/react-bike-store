

import React, { Component, Fragment } from 'react';
import StolenBikesContainer from '../../containers/stolenBikesContainer';
import BikeList from '../BikeList';
import { Error } from '../Error';
import { Loader } from '../Loader';
import Pagination from '../Pagination';

class StolenBikes extends Component {

    render() {
        return (
            <StolenBikesContainer>
                {({ bikes, error, loading, selectBike, activeBike, selectedPage, pageCount, onNextPage, onPreviousPage, selectPage }) => (
                    !activeBike &&
                    <Fragment>
                        <Error error={error} />
                        <Loader loading={loading} />
                        {!error && !loading &&
                            <Fragment>
                                <BikeList
                                    bikes={bikes}
                                    onselectBike={selectBike} />
                                <Pagination
                                    selectedPage={selectedPage}
                                    pageCount={pageCount} onNextPage={onNextPage}
                                    onPreviousPage={onPreviousPage}
                                    selectPage={selectPage} />
                            </Fragment>}

                    </Fragment>
                )}
            </StolenBikesContainer>
        );
    }
}

export default StolenBikes;
