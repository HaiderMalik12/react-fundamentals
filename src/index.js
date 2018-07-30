import React, { Component } from 'react';
import { render } from 'react-dom';

const node = document.getElementById('root');

class Project extends Component {
    render() {
        return React.createElement(
            'div',
            { className: 'projectName' },
            `${this.props.id}-${this.props.name}`,
            React.createElement(
                'p',
                {},
                this.props.description)
        )
    }
}

const App = React.createElement(Project, {
    name: 'Learn React by building 10 Projects',
    id: 1,
    description: 'You will learn React Fundamentals and Real world apps'
});

render(App, node);