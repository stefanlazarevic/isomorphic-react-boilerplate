import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from '../../routes/routes';

export default () => (
    <Switch>
        {Routes.map((route, index) => <Route key={index} {...route} />)}
    </Switch>
);
