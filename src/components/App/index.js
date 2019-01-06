import React, { Component } from 'react';
import { Container, Main } from './style';
import {Header} from '../Header';
import StolenBikes from '../StolenBikes';
import BikeFilter from '../BikeFilter';
import StolenBikeDetail from '../StolenBikeDetail';


class App extends Component {

    render() {
        return (
            <Main>
                <Container>
                    <Header />
                    <BikeFilter/>
                    <StolenBikes/>
                    <StolenBikeDetail/>
                </Container>
            </Main>
        );
    }
}

export default App;
