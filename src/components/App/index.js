import React, { Component } from 'react';
import { Container, H1, Main } from './style';
import {Header} from '../Header';
import StolenBikes from '../StolenBikes';

class App extends Component {

    render() {
        return (
            <Main>
                <Container>
                    <Header />
                    <StolenBikes/>
                </Container>
            </Main>
        );
    }
}

export default App;
