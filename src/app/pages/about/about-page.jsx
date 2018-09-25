/**
 * React required imports.
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';

/**
 * Import page styles.
 */
import './style/about-page.style.css';

class AboutPage extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Hello World from About compoenent</title>
                <meta name="description" content="Welcome to the About page." />
                <meta name="keywords" content="react, demo, keywords" />
            </Helmet>
        );
    }

    componentDidMount() {
        pageview('/about');
    }

    render() {
        return (
            <Fragment>
                {this.renderPageMeta()}
                <h1>This is an About page</h1>
                <p>Nothing else to see here...</p>
                <Link to="/">Back to Index</Link>
            </Fragment>
        );
    }
}

/**
 * Initialize required actions to load data before rendering on server.
 */
AboutPage.serverFetchInitialData = [];

export default AboutPage;
