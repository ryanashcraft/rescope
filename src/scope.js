import isObject from 'lodash.isobject';
import { Component, PropTypes } from 'react';

const storeShape = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
});

const defaultMergeState = (parentState, scopeState) => {
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

class Scope extends Component {
  static defaultProps = {
    mergeState: defaultMergeState,
  };

  getChildContext() {
    const scopeStore = this.getStore();

    return {
      store: scopeStore,
    };
  }

  getStore() {
    const { context, props } = this;

    return {
      ...context.store,
      dispatch: (...params) => {
        const parentDispatchResult = context.store.dispatch(...params);
        const scopeDispatchResult = props.store ? props.store.dispatch(...params) : undefined;

        if (scopeDispatchResult) {
          return scopeDispatchResult;
        } else {
          return parentDispatchResult;
        }
      },
      getState: (...params) => {
        const parentState = context.store.getState(...params);
        const scopeState = props.store ? props.store.getState(...params) : undefined;

        return props.mergeState(parentState, scopeState);
      },
    };
  }

  render() {
    return this.props.children;
  }
}

Scope.propTypes = {
  children: PropTypes.element.isRequired,
  store: storeShape,
  mergeState: PropTypes.func.isRequired,
};

Scope.contextTypes = {
  store: storeShape.isRequired,
};

Scope.childContextTypes = {
  store: storeShape.isRequired,
};

export default Scope;
