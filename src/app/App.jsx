import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppRouter from './routes/app-router';

import './assets/scss/index.scss';

class App extends Component {
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

export default App;
