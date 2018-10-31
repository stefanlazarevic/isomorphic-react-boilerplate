import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
import { Link, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Heading } from '@components';

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
      <Heading>About Page</Heading>

      <Link to="/">Home</Link>
      <br />
      <Link to="/about/example">Example</Link>
      {renderRoutes(this.props.route.routes)}
    </Fragment>
  );
}

export default hot(module)(withRouter(About));
