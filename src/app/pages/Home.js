import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

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

  componentDidMount = () => {
    ReactGA.pageView('/');
  };

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <div style={{ textAlign: 'center' }}>
        <img src="static/img/landing-react-logo.png" alt="React Logo" />
        <h1>Home Page</h1>
        <Link to="/about">About</Link>
      </div>
    </Fragment>
  );
}

export default hot(module)(Home);
