import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

class About extends Component {
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
    </Fragment>
  );
}

export default hot(module)(About);
