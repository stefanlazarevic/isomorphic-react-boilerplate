import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

class Components extends Component {
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
    ReactGA.pageview('/components');
  }

  render = () => <Fragment>{this.injectPageMetadata()}</Fragment>;
}

export default withRouter(Components);
