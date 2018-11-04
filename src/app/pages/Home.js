import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { Heading } from '@components';

class Home extends Component {
  static propTypes = {};
  static defaultProps = {};

  injectPageMetadata = () => (
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  componentDidMount() {
    ReactGA.pageview('/');
  }

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <div style={{ textAlign: 'center' }}>
        <img src="static/img/landing-react-logo.png" alt="React Logo" />
        <Heading>Home Page</Heading>
        <Link to="/about">About</Link>
        <br />
        <Link to="/components">Components</Link>
      </div>
    </Fragment>
  );
}

export default hot(module)(Home);
