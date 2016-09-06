import { combineReducers } from 'redux';

import counterReducer from './Counter/reducer';
import toggleReducer from './Toggle/reducer';

export default combineReducers({
	counter: counterReducer,
  toggle: toggleReducer,
});