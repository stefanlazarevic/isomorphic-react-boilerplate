import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/**
 * Import page styles.
 */
import './UnknownPage.scss';

class UnknownPage extends Component {
  renderPageMeta() {
    return (
      <Helmet>
        <title>Page Title less than 55 characters</title>
      </Helmet>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderPageMeta()}
        <h1>404 Not Found</h1>
        <p>You may be lost. Return back to <Link to="/">Home</Link>.</p>
      </Fragment>
    );
  }
}

export default UnknownPage;
