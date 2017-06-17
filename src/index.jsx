/* eslint-disable */
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import routes from './routes';
import socketMiddleware from './middleware/SocketMiddleware';

const initialState = window.__INITIAL_STATE__; // eslint-disable-line
const store = configureStore(initialState);
const history = syncHistoryWithStore(
  browserHistory,
  store,
);
socketMiddleware.init(store);

const MOUNT_NODE = document.getElementById('AppContainer');
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>,
    document.querySelector('.AppContainer')
  );
};

if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }

  if (module.hot) {
    const renderApp = render;
    render = () => {
      try {
        renderApp()
      } catch (error) {
        const RedBox = require('redbox-react').default;
        ReactDOM.render(<RedBox error={error} />, document.querySelector('.AppContainer'));
      }
    }
  }
}

render();
/* eslint-enable */
