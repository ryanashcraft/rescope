import { Component } from 'react';

class Counter extends Component {
  render() {
    const { props } = this;

    return (
      <div>
	      <div>
	      	<img
            src={`https://placekitten.com/${props.size.width}/${props.size.height}`}
            alt="Kitten"
          />
    	  </div>
        <button onClick={props.changeSize}>Change Size</button>
      </div>
    );
  }
}

export default Counter;
