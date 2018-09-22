import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import './home.page.css';

class HomePage extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Hello World from Home compoenent</title>
                <meta name="description" content="Welcome to the Home page."/>
                <meta name="keywords" content="react, demo, keywords" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.renderPageMeta()}
                <h1 styleName="title">Welcome to the Home Page</h1>
                <p>From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.</p>
            </div>
        );
    }
}

export default HomePage;
