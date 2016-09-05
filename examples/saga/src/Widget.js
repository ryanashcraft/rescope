import { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { scope } from 'rescope';

const createScopeStore = () => {
  const reducer = (prevState = 0, action) => {
    if (action.type === 'INCREMENT') {
      return prevState + 1;
    } else {
      return prevState;
    }
  };

  return createStore(reducer);
};

const actions = {
  increment() {
    return {
      type: 'INCREMENT'
    };
  }
};

class Widget extends Component {
  render() {
    const { props } = this;

    return (
      <div>
        <button onClick={props.increment}>Click me</button>
        {props.counter}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = {
  increment: actions.increment,
};

export default () => scope(createScopeStore)(connect(mapStateToProps, mapDispatchToProps)(Widget));
