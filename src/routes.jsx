import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './containers/App';
import UserSearch from './containers/UserSearch';
import ReposByUser from './containers/ReposByUser';

const Routes = (
  <Route path='/' component={App}>
    <IndexRoute component={UserSearch} />
    <Route path='repos/:user' component={ReposByUser} />
  </Route>
);

export default Routes;
