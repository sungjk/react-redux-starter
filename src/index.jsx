/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';

import configureStore from './store';
import routes from './routes';
import socketMiddleware from './middleware/SocketMiddleware';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line
const store = configureStore(initialState);
socketMiddleware.init(store);

const MOUNT_NODE = document.getElementById('AppContainer');
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} children={routes} />
    </Provider>
    , MOUNT_NODE);
};

if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }

  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error);
      }
    }
  }
}

render();
/* eslint-enable */
