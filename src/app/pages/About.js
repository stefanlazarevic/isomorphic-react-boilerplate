import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Link, Route } from 'react-router-dom';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);
class About extends Component {
  static propTypes = {};
  static defaultProps = {
    routes: [],
  };

  injectPageMetadata = () => (
    <Helmet>
      <title>About Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <h1>About Page</h1>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about/example">Example</Link>

      {this.props.routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Fragment>
  );
}

export default hot(module)(About);
