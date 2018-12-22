import React, { Component } from 'react';
import { Container, Main } from './style';
import {Header} from '../Header';

class App extends Component {

    render() {
        return (
            <Main>
                <Container>
                    <Header />
                </Container>
            </Main>
        );
    }
}

export default App;
