import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';

import { fetchUsersAction } from '../../redux/actions/users.actions';

/**
 * Import page styles.
 */
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classes from './HomePage.scss';

import Heading from '../../components/core/heading/Heading';
import Paragraph from '../../components/core/paragraph/Paragraph';
class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderPageMeta() {
    return (
      <Helmet>
        <title>Page Title less than 55 characters</title>
        <meta name="description" content="Description of the page less than 150 characters" />
        <meta name="keywords" content="react, demo, keywords" />
      </Helmet>
    );
  }

  componentDidMount() {
    pageview('/');
  }

  render() {
    return (
      <div>
        {this.renderPageMeta()}
        <Heading text="Welcome to the Home Page" align="center"/>
        <Paragraph align="center">
          From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.
        </Paragraph>
      </div>
    );
  }

}

/**
 * Initialize required actions to load data before rendering on server.
 */
HomePage.serverFetchInitialData = [fetchUsersAction];

export default withStyles(classes)(HomePage);
