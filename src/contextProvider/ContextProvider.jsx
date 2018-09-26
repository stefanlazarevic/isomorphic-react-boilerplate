import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppRouter from '../app/routes/app-router';

class ContextProvider extends Component {
    static childContextTypes = {
        insertCss: PropTypes.func,
    }

    getChildContext() {
        return { ...this.props.context };
    }

    render() {
        return <AppRouter {...this.props} />;
    }
}

export default ContextProvider;
