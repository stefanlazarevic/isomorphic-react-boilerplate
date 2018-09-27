/**
 * React required imports.
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { initialize as initGoogleAnalytics } from 'react-ga';

/**
 * Application route map import.
 */
import AppRoutes from './Routes';

/**
 * Isomorphic React Router used to handle requests
 * on both server and client.
 *
 * @requires - Google Analytics ID.
 */
class AppRouter extends Component {
    constructor() {
        super();
        initGoogleAnalytics('');
    }

    render() {
        return (
            <Switch>
                {AppRoutes.map((route, index) => <Route key={index} {...route} />)}
            </Switch>
        );
    }
}

export default AppRouter;
