import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default class About extends Component {
    renderHelmet() {
        return (
            <Helmet>
                <title>Hello World from About compoenent</title>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                { this.renderHelmet() }
                <h1>About component</h1>
                <Link to="/">Index</Link>
            </div>
        );
    }
}
