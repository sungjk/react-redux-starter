import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Index from './containers';

const Routes = (
  <Route path="/" component={Index}>
    {/* welcome */}
    <IndexRoute component={Index} />
  </Route>
);

export default Routes;
