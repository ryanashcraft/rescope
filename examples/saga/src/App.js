import { Component } from 'react';
import Widget from './Widget';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const WidgetA = Widget();
    const WidgetB = Widget();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rescope</h2>
        </div>
        <WidgetA />
        <WidgetB />
      </div>
    );
  }
}

export default App;
