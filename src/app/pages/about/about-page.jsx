/**
 * React required imports.
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';

/**
 * Import page styles.
 */
import styles from './style/about-page.style.scss';

class AboutPage extends Component {
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
        pageview('/about');
    }

    render() {
        return (
            <Fragment>
                {this.renderPageMeta()}
                <h1 className={classnames(styles.title)}>This is an About page</h1>
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

export default withStyles(styles)(AboutPage);
