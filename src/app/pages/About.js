import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Link, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Typography } from '@components';

class About extends Component {
  static propTypes = {
    route: PropTypes.object,
  };
  static defaultProps = {};

  injectPageMetadata = () => (
    <Helmet>
      <title>About Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  componentDidMount() {
    ReactGA.pageview('/about');
  }

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <Typography component="h1">About Page</Typography>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about/example">Example</Link>
      {renderRoutes(this.props.route.routes)}
    </Fragment>
  );
}

export default withRouter(About);
