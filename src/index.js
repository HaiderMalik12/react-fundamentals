import React, { Component } from 'react';
import { render } from 'react-dom';
// import PropTypes from 'prop-types';

const node = document.getElementById('root');

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: constructor');
    this.state = {
      isError: false
    };
  }
  componentWillMount() {
    console.log('ChildComponent: componentWillMount');
  }
  componentDidMount() {
    console.log('ChildComponent: componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('ChildComponent: componentWillReceiveProps');
    console.log('nextProps:', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('ChildComponent: shouldComponentUpdate');
    console.log('nextProps:', nextProps);
    console.log('nextState:', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ChildComponent: componentWillUpdate');
    console.log('nextProps:', nextProps);
    console.log('nextState:', nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ChildComponent: componentDidUpdate');
    console.log('PrevProps:', prevProps);
    console.log('PrevState:', prevState);
  }
  componentWillUnmount() {
    console.log('ChildComponent: componentWillUnMount');
  }
  catchHandler = () => {
    this.setState({ isError: true });
  };
  render() {
    console.log('ChildComponent: render');
    if (this.state.isError) {
      throw new Error('Something went wrong');
    }
    return (
      <div>
        <p> Message : {this.props.msg} </p>
        <button onClick={this.catchHandler}>Catch Error </button>
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
  componentWillUnmount() {
    console.log('ParentComponent: componentWillUnMount');
  }
  componentDidCatch(err, errorInfo) {
    console.log('ParentComponent: componentDidCatch');
    console.error(err);
    console.error(errorInfo);
    this.setState({ err, errorInfo });
  }
  render() {
    console.log('ParentComponent: render');
    if (this.state.err) {
      //<CatchError/>
      return <div>Something went wrong</div>;
    }
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
