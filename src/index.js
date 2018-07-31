import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const node = document.getElementById('root');

const Greet = (props) => {
    return (
        <div> Hello from {props.name}</div>
    )
}
Greet.propTypes = {
    name: PropTypes.string.isRequired
}
Greet.defaultProps = {
    name: 'John'
}
render(<Greet />, node);