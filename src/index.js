import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import deepMerge from 'deepmerge';

const node = document.getElementById('root');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: 1,
                title: 'Learn React',
                category: {
                    id: 1,
                    name: 'Programming'
                }
            }
        }
    }
    changeTitleHandler = () => {
        this.setState(() => ({
            todo: {
                title: 'Learn Redux'
            }
        }))
    }
    changeCategoryHandler = () => {
        // this.setState(() => ({
        //     todo: {
        //         category: {
        //             name: 'Personal'
        //         }
        //     }
        // }))
        //1. ES6 way
        const updatedCategory = { category: { name: 'Personal' } };
        // this.setState({
        //     todo: { ...this.state.todo, ...updatedCategory }
        // })
        // this.setState({
        //     todo: Object.assign({}, this.state.todo, updatedCategory)
        // })

        const updatedTodo = deepMerge(this.state.todo, updatedCategory);
        this.setState({ todo: updatedTodo });
    }
    render() {
        return (
            <div>
                <h3> TODO Title:  {this.state.todo.title}</h3>
                <p>Category: {this.state.todo.category.name} </p>
                <button onClick={this.changeTitleHandler}> Change title</button>
                <button onClick={this.changeCategoryHandler}> Change Category</button>
            </div>
        )
    }
}

render(<App />, node);