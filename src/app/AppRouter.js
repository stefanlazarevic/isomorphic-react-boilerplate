import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes/index';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    );
  }
}

export default AppRouter;
