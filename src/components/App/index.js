import React, { Component } from 'react';
import { Container, H1, Main } from './style';
import {Header} from '../Header';
import BikeStore from '../BikeStore';

class App extends Component {

    render() {
        return (
            <Main>
                <Container>
                    <Header />
                    <BikeStore/>
                </Container>
            </Main>
        );
    }
}

export default App;
