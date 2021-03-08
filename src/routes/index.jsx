import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="*" component={() => <h2> Not Found </h2>} />
  </Switch>
);

export default Routes;
