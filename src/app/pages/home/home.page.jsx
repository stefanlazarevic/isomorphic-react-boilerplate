import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from "react-redux";
import { fetchUsersAction } from "../../redux/actions/users.actions";

import './home.page.css';

class HomePage extends Component {
    componentDidMount() {
        if (this.props.users.length <= 0) {
            this.props.fetchUsersAction();
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
        const { users } = this.props;

        return (
            <div>
                {this.renderPageMeta()}
                <h1 styleName="title">Welcome to the Home Page</h1>
                <p>From here you can visit <Link to="/about">About page</Link> or see how <Link to="/nonexistingpage">Non-Existing Page</Link> looks like.</p>
                <hr/>

                <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        );
    }
}

HomePage.serverFetch = fetchUsersAction;

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = {
    fetchUsersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
