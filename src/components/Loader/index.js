


import React, { Fragment } from 'react';
import { BouncerWrapper, SpinnerWrapper, Div } from './style'

export const Loader = ({ loading }) => {
    return (
        <Fragment>
            {loading &&
                <Div>
                    <SpinnerWrapper>
                        <span><strong>Loading </strong>  </span>
                        <BouncerWrapper />
                        <BouncerWrapper />
                        <BouncerWrapper />
                    </SpinnerWrapper>
                </Div>
            }
        </Fragment>

    );
}
