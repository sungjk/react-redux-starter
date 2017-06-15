import * as types from './actionTypes';

export const connectSocket = url => dispatch =>
  new Promise((resolve) => {
    dispatch({
      type: types.CONNECT_SOCKET,
      url,
    });
    resolve();
  });

export const updateSocketConnection = connected => dispatch =>
  dispatch({
    type: types.SOCKET_CONNECTION_CHANGED,
    connected,
  });

export const loadComplete = () => dispatch =>
  new Promise((resolve) => {
    dispatch({
      type: types.LOAD_COMPLETE,
    });
    resolve();
  });
