import React, { Component } from 'react';
import { render } from 'react-dom';
// import PropTypes from 'prop-types';

const node = document.getElementById('root');

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: constructor');
  }
  componentWillMount() {
    console.log('ChildComponent: componentWillMount');
  }
  componentDidMount() {
    console.log('ChildComponent: componentDidMount');
  }
  render() {
    console.log('ChildComponent: render');
    return (
      <div>
        <p> Message : {this.props.msg} </p>
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    };
    console.log('ParentComponent: constructor');
  }
  componentWillMount() {
    console.log('ParentComponent: componentWillMount');
  }
  componentDidMount() {
    console.log('ParentComponent: componentDidMount');
  }
  onChangeHandler = event => {
    this.setState({ msg: event.target.value });
  };
  render() {
    console.log('ParentComponent: render');
    return (
      <div>
        <h2>LifeCycle methods</h2>
        <p> Enter your message : </p>
        <input
          onChange={this.onChangeHandler}
          type="text"
          value={this.state.msg}
        />
        <ChildComponent msg={this.state.msg} />
      </div>
    );
  }
}

render(<ParentComponent />, node);
