import * as ActionTypes from '../actionTypes';
import { clearSearchResults } from '../actions';

export default action$ =>
  action$.ofType(ActionTypes.SEARCHED_USERS)
    .filter(action => !action.payload.query)
    .map(clearSearchResults);
