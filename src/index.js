import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

const data = [
    { id: '1', name: 'Module # 1' },
    { id: '2', name: 'Module # 2' },
    { id: '3', name: 'Module # 3' },
]
//stateful
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            name: 'Learn React',
            tasks: this.props.tasks
        }
    }
    render() {
        return (
            <div>
                <h3> Project Name : {this.state.name} </h3>
                <h3>Task Card </h3>
                <TaskCard tasks={this.state.tasks} />
                <h3> Task Table</h3>
                <TaskTable tasks={this.state.tasks} />
            </div>
        )
    }
}
//child component
const TaskCard = props => {
    return (
        <div>
            {props.tasks.map(task => (
                <li>{task.name} </li>
            ))}
        </div>
    )
}
const TaskTable = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task => (
                        <tr>
                            <td> {task.id}</td>
                            <td> {task.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

render(<Project tasks={data} />, node);