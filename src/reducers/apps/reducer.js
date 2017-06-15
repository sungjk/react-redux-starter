import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  url: '',  // fill out your websocket address.
  connected: false,
  isLoaded: false,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CONNECT_SOCKET:
      return state.merge({
        url: action.url,
      });
    case types.SOCKET_CONNECTION_CHANGED:
      return state.merge({
        connected: action.connected,
      });
    case types.LOAD_COMPLETE:
      return state.merge({
        isLoaded: true,
      });
    default:
      return state;
  }
}

export function getSocketConnection(state) {
  const { connected } = state.apps;
  return connected;
}

export function getIsLoaded(state) {
  const { isLoaded } = state.apps;
  return isLoaded;
}
