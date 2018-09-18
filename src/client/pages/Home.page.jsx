import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default class Home extends Component {
    renderHelmet() {
        return (
            <Helmet>
                <title>Hello World from Home compoenent</title>
                <style dangerouslySetInnerHTML={{ __html: `.body { background: #000 }` }}></style>

            </Helmet>
        );
    }

    render() {
        return (
            <div>
                { this.renderHelmet() }
                <h1>Home component</h1>
                <Link to="/about">About</Link>
            </div>
        );
    }
}
