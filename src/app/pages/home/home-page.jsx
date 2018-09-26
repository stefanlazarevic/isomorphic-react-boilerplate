import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { fetchUsersAction } from '../../state/actions/users.actions';

import styles from './style/home-page.style.scss';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    renderPageMeta() {
        return (
            <Helmet>
                <title>Hello World from Home compoenent</title>
                <meta name="description" content="Welcome to the Home page." />
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
                <h1 className={styles.title}>Welcome to the Home Page</h1>
                <p>From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.</p>
                <hr />
            </div>
        );
    }

}

/**
 * Initialize required actions to load data before rendering on server.
 */
HomePage.serverFetchInitialData = [fetchUsersAction];

export default withStyles(styles)(HomePage);
