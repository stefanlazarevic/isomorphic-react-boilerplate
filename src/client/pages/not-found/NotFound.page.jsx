import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default class PageNotFound extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Page not found</title>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.renderPageMeta()}
                <h1>404 Not Found</h1>
                <p>You may be lost. Return back to <Link to="/">Home</Link>.</p>
            </div>
        );
    }
}
