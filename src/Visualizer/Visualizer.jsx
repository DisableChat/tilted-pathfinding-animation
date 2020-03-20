import React, {Component} from 'react';
import Node from './Node';

import './Visualizer.css';

export default class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                RIP
                <Node></Node>
            </div>
        );
    }
}
