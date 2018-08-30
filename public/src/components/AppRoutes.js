import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    );
  }
}

export default AppRoutes;
