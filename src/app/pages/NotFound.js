import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
class NotFound extends Component {
  static propTypes = {};
  static defaultProps = {};

  injectPageMetadata = () => (
    <Helmet>
      <title>Not Found Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <h1>Page not found</h1>
      <Link to="/">Back to Home</Link>
    </Fragment>
  );
}

export default NotFound;
