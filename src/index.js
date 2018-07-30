import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

class Project extends Component {
    render() {
        //immutable data you could not change the props
        // this.props.name = 'Changed project'
        return React.createElement(
            'div',
            { className: 'projectName' },
            `${this.props.id}-${this.props.name}`,
            React.createElement(
                'p',
                {},
                this.props.description,
                this.props.children,
            )
        )
    }
}
class NewTask extends Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = { name: 'Learning React' }
    }
    render() {
        debugger;
        return React.createElement(
            'form',
            {},
            React.createElement(
                'input',
                {
                    placeholder: 'Task name',
                    value: this.state.name
                }
            ),
            React.createElement(
                'input',
                {
                    type: 'submit',
                    value: 'Post'
                }
            )
        )
    }
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
class Task extends Component {
    render() {
        return React.createElement(
            'div',
            { className: 'taskName' },
            this.props.name
        )
    }
}

const App = React.createElement(Project, {
    name: 'Learn React by building 10 Projects',
    id: 1,
    description: 'You will learn React Fundamentals and Real world apps'
},
    React.createElement(Task, {
        id: 1,
        name: 'Create Fundamenatls modoule'
    }),
    React.createElement(NewTask)
);

render(App, node);