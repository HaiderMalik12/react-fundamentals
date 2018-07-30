import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        }
    }
    submitHandler = (task) => {
        //update
        //dont modify the state directly
        //you have to copy and create new array
        const newTasks = this.state.tasks.concat([task]);
        this.setState({
            tasks: newTasks
        })
    }
    render() {
        //immutable data you could not change the props
        // this.props.name = 'Changed project'
        return (
            <div className="projectName">
                <h3>Project Name: </h3>
                <span>{this.props.name}</span>
                <div>
                    {this.props.description}
                </div>
                <h3> Tasks </h3>
                {this.state.tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            id={task.id}
                            name={task.name}
                        />
                    )
                })}
                <div>
                    <h3> New Task</h3>
                    <NewTask
                        handleSubmit={this.submitHandler}
                    />
                </div>
            </div>
        )
    }
}
Project.propTypes = {
    tasks: PropTypes.arrayOf(Object)
}
class NewTask extends Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = { name: '' }
    }
    nameChangeHandler = (event) => {
        const value = event.target.value;
        this.setState((prevState, props) => {
            return {
                name: value
            }
        })
    }
    submitHandler = (event) => {
        event.preventDefault(); //don't reload the page

        const task = {
            name: this.state.name
        }
        task.id = Date.now()
        //call the handleSubmit from parent component
        //which is project
        this.props.handleSubmit(task);
        this.setState(() => ({
            name: ''
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="add task name"
                        value={this.state.name}
                        onChange={this.nameChangeHandler} />

                    <input
                        type="submit"
                        value="Post"
                    />

                </form>
            </div>
        )
    }
}

NewTask.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}
Project.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
class Task extends Component {
    render() {
        return <li>{this.props.name}</li>
    }
}

const App = React.createElement(Project, {
    name: 'Learn React by building 10 Projects',
    id: 1,
    description: 'You will learn React Fundamentals and Real world apps',
    tasks: [
        { id: '1', name: 'Learn React' },
        { id: '2', name: 'Learn Angular' },
        { id: '3', name: 'Learn Redux' },
    ]
},
);

render(App, node);