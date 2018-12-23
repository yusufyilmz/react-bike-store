


import React, { Fragment } from 'react';
import { Span } from './style'


export const Error = ({error}) => {
    return (
        <Fragment>
            {error && 
                <div>
                    <Span>
                        Ooops... Something went wrong..
                    </Span>
                </div>
            }
        </Fragment>


    );
}
