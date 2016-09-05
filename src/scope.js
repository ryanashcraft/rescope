import isObject from 'lodash.isobject';
import { Component, PropTypes } from 'react';

const storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

const scope = (createScopeStore) => (WrappedComponent) => {
  const scopeStore = createScopeStore();

  class Scope extends Component {
    getChildContext() {
      const scopeDispatch = scopeStore.dispatch;
      const scopeGetState = scopeStore.getState;

      scopeStore.dispatch = (...params) => {
        const parentDispatchResult = this.context.store.dispatch(...params);
        const scopeDispatchResult = scopeDispatch(...params);

        if (scopeDispatchResult) {
          return scopeDispatchResult;
        } else {
          return parentDispatchResult;
        }
      };

      scopeStore.getState = (...params) => {
        const parentState = this.context.store.getState(...params);
        const scopeState = scopeGetState(...params);

        if (isObject(scopeState)) {
          const mergedState = {
            ...parentState,
            ...scopeState,
          };

          return mergedState;
        } else {
          return scopeState;
        }
      };

      return {
        store: scopeStore,
      };
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  Scope.contextTypes = {
    store: storeShape.isRequired,
  };

  Scope.childContextTypes = {
    store: storeShape.isRequired,
  };

  return Scope;
}

export default scope;
