import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './home.page.scss';
class HomePage extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Hello World from Home compoenent</title>
                <meta name="description" content="Welcome to the Home page."/>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.renderPageMeta()}
                <h1 className={styles.title}>Welcome to the Home Page</h1>
                <p>From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.</p>
            </div>
        );
    }
}

export default HomePage;
