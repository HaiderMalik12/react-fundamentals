import React from 'react';
import { render } from 'react-dom';

const node = document.getElementById('root');

const root = React.createElement(
    'h1',
    {},
    'Hello React');

render(root, node);