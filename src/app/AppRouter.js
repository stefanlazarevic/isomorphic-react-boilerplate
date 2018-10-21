import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import routes from './routes/web/routes';
import NotFound from '@app/pages/NotFound';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);
class AppRouter extends Component {
  render = () => {
    return (
      <Fragment>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
        <Route component={NotFound} />
      </Fragment>
    );
  };
}

export default AppRouter;
