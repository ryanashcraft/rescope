import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const initialState = 0;

const reducer = (prevState = initialState, action) => {
  return prevState;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
