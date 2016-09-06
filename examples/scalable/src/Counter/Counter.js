import { Component } from 'react';

class Counter extends Component {
  render() {
    const { props } = this;

    return (
      <div>
        <button onClick={props.increment}>+1</button>
        {props.counter}
      </div>
    );
  }
}

export default Counter;
