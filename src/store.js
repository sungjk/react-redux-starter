import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import SocketMiddleware from './middleware/SocketMiddleware';
import * as reducers from './reducers';

let middleware = [thunk, SocketMiddleware.sockerReducer];

if (__DEV__) { // eslint-disable-line
  const logger = reduxLogger({ collapsed: true });
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(...middleware),
  );
}
