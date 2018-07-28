import React from 'react';
import { render } from 'react-dom';

const node = document.getElementById('root');

const root = React.createElement(
    'div',
    {},
    //array of props or children
    'Hello React',
    'Hello world',
    'I am learning React',
    React.createElement(
        'a',
        { href: '/' },
        'Learn React'),
    'Hello world',

    React.createElement(
        'div',
        {},
        React.createElement(
            'p',
            {},
            'I am paragraph inside div')
    )
);
console.log(root);

render(root, node);