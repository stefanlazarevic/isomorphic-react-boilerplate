import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './about.page.scss';
class AboutPage extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Hello World from About compoenent</title>
                <meta name="description" content="Welcome to the About page." />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.renderPageMeta()}
                <h1 className={styles.title}>This is an About page</h1>
                <p>Nothing else to see here...</p>
                <Link to="/">Back to Index</Link>
            </div>
        );
    }
}

export default AboutPage;
