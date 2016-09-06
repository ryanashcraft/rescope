import { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Scope } from 'rescope';

import Counter from '../Counter/Counter.container';
import counterReducer from '../Counter/reducer';

import KittenWidget from '../KittenWidget/KittenWidget.container';
import kittenWidgetReducer from '../KittenWidget/reducer';

import Toggle from '../Toggle/Toggle.container';

class App extends Component {
  render() {
    const { props } = this;
    const sharedKittenReducer = createStore(kittenWidgetReducer);

    return (
      <div>
        <div>
          <h1>Rescope</h1>
        </div>
        <div>
          <h2>Counter</h2>
          Global {props.counter}
          <Scope
            store={createStore(counterReducer)}
          >
            <Counter />
          </Scope>
          <Scope
            store={createStore(counterReducer)}
            mergeState={(parentState, scopeState) => scopeState}
          >
            <Counter />
          </Scope>
        </div>
        <div>
          <h2>Toggle</h2>
          <Scope
            mergeState={(state) => state.toggle}
          >
            <Toggle />
          </Scope>
        </div>
        <div>
          <h2>Kitten</h2>
          <Scope
            store={createStore(kittenWidgetReducer)}
          >
            <KittenWidget />
          </Scope>
        </div>
        <div>
          <h2>Kitten Pair</h2>
          <Scope
            store={createStore(kittenWidgetReducer)}
          >
            <KittenWidget />
          </Scope>
          <Scope
            store={createStore(kittenWidgetReducer)}
          >
            <KittenWidget />
          </Scope>
        </div>
        <div>
          <h2>Shared Kitten Pair</h2>
          <Scope
            store={sharedKittenReducer}
          >
            <KittenWidget />
          </Scope>
          <Scope
            store={sharedKittenReducer}
          >
            <KittenWidget />
          </Scope>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(App);
