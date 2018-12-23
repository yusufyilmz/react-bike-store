import React, { Component } from 'react';
import { Container, H1, Main } from './style';
import {Header} from '../Header';
import StolenBikes from '../StolenBikes';
import BikeFilter from '../BikeFilter';

class App extends Component {

    render() {
        return (
            <Main>
                <Container>
                    <Header />
                    <BikeFilter/>
                    <StolenBikes/>
                </Container>
            </Main>
        );
    }
}

export default App;
