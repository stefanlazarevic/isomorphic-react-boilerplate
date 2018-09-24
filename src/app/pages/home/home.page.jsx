import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from "react-redux";
import { fetchData } from "../../redux/store";

import './home.page.css';

class HomePage extends Component {
    componentDidMount() {
        if (this.props.circuits.length <= 0) {
            this.props.fetchData();
        }
    }

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
        const { circuits } = this.props;

        return (
            <div>
                {this.renderPageMeta()}
                <h1 styleName="title">Welcome to the Home Page</h1>
                <p>From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.</p>
                <hr/>

                <ul>
                    {circuits.map(({ circuitId, circuitName, Location }) => (
                        <li key={circuitId} >{circuitName} - {Location.locality}, {Location.country}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

HomePage.serverFetch = fetchData;

const mapStateToProps = (state) => ({
    circuits: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
