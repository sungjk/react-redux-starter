import assign from 'object-assign';
import { EventEmitter } from 'events';

class SocketMiddleware extends EventEmitter {
  constructor() {
    super();
    this.pendedReqs = {};
    this.reqId = 0;
    this.ws = null;
    this.store = null;
    this.sockerReducer = this.sockerReducer.bind(this);
  }

  init(store) {
    this.store = store;
  }

  /* eslint-disable */
  sockerReducer(store) {
    return next => action => {
      console.log('socketReducer', action)
      switch (action.type) {
        case 'apps.CONNECT_SOCKET':
          if (this.ws != null) {
            this.ws.close();
          }
          this.ws = new WebSocket(action.url);
          this.ws.onopen = this.onOpen.bind(this);
          this.ws.onclose = this.onClose.bind(this);
          this.ws.onerror = this.onError.bind(this);
          this.ws.onmessage = this.onMessage.bind(this);
          break;
        case 'apps.DISCONNECT':
          if (this.ws != null) {
            this.ws.close();
          }
          this.ws = null;
          break;
        case 'SEND':
          if (this.ws.readyState === WebSocket.OPEN) {
            const reqJson = assign({}, action.params, {
              action: action.action,
              reqId: this.reqId,
            });
            this.ws.send(JSON.stringify(reqJson));
            this.pendedReqs[this.reqId] = action.callback;
            this.reqId += 1;
          } else {
            setTimeout(() => {
              action.dispatch({
                type: 'SEND',
                action: action.action,
                params: action.params,
                callback: action.callback,
              });
            }, 100);
          }
          break;
        default:
          return next(action);
      }
    };
  }

  onOpen() {
    console.log('WebSocket opened');
    // this.store.dispatch(appActions.updateSocketConnection(true));
  }

  onClose() {
    console.log('WebSocket closed');
    // this.store.dispatch(appActions.updateSocketConnection(false));
  }

  onError(error) {
    console.log('ws error', error);
  }

  onMessage(message) {
    const data = JSON.parse(message.data);
    // console.log('get', data);
    if (data.hasOwnProperty('action')) {
      // TODO
    } else {
      this.pendedReqs[data.reqId](null, data);
    }
  }
  /* eslint-enable */

}

export default new SocketMiddleware();
