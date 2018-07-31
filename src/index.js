import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    incrementHandler = () => {
        ///....
    }
    render() {
        return (
            <div>
                <h3>{this.state.count} </h3>
                <button> + </button>
            </div>
        )
    }
}

render(<Counter incrementBy={1} />, node);