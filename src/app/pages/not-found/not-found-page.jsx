import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import './style/not-found-page.style.scss';

class PageNotFound extends Component {
    renderPageMeta() {
        return (
            <Helmet>
                <title>Page not found 2</title>
            </Helmet>
        );
    }

    render() {
        return (
            <Fragment>
                {this.renderPageMeta()}
                <h1>404 Not Found</h1>
                <p>You may be lost. Return back to <Link to="/">Home</Link>.</p>
            </Fragment>
        );
    }
}

export default PageNotFound;
