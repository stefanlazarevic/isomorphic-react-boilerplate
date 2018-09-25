/**
 * React required imports.
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';

import { fetchUsersAction } from '../../state/actions/users.actions';

/**
 * Import page styles.
 */
import './style/home-page.style.css';

class HomePage extends Component {
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
                <h1>Welcome to the Home Page</h1>
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

export default HomePage;
