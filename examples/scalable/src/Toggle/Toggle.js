import { Component } from 'react';

class Toggle extends Component {
  render() {
    const { props } = this;

    return (
      <div>
        <button onClick={props.toggle}>{props.state ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default Toggle;
