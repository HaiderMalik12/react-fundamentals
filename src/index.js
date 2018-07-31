import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: 1,
                title: 'Learn React'
            }
        }
    }
    changeTitleHandler = () => {
        // this.setState(() => ({
        //     todo: {
        //         title: 'Learn Redux'
        //     }
        // }))
        this.setState({
            todo: {
                title: 'Learn redux'
            }
        })
    }
    render() {
        return (
            <div>
                <h3> TODO Title:  {this.state.todo.title}</h3>
                <button onClick={this.changeTitleHandler}> Change title</button>
            </div>
        )
    }
}

render(<App />, node);