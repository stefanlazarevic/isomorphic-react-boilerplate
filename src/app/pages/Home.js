import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { Typography } from '@components';

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
        <Typography component="h1">Home Page</Typography>
        <Link to="/about">About</Link>
        <br />
        <Link to="/components">Not Found</Link>
      </div>
    </Fragment>
  );
}

export default Home;
