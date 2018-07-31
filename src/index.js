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
    static defaultProps = {
        incrementBy: 1
    }
    incrementHanlder = () => {
        // this.props.incrementBy = 12
        this.setState((prevState, props) => {
            //increment the count with previous value
            console.log(prevState, props);
            return {
                count: prevState.count + props.incrementBy
            }

        })
    }
    render() {
        return (
            <div>
                <h3> {this.state.count}</h3>
                <button onClick={this.incrementHanlder}>+</button>
            </div>
        )
    }
}
Counter.propTypes = {
    incrementBy: PropTypes.number.isRequired
}
render(<Counter incrementBy={1} />, node);