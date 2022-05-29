import React, { Component } from 'react';
import Chamada from './section/Chamada';
import Depoimentos from './section/Depoimentos';

class Main extends Component {
    render() {
        return (
            <main>
                <Chamada/>
                <Depoimentos/>
            </main>
        );
    }
}

export default Main;
