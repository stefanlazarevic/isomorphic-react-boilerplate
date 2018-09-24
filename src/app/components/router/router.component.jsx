import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from '../../routes/routes';

const AppRouter = () => (
    <Switch>
        {Routes.map((route, index) => <Route key={index} {...route} />)}
    </Switch>
);

export default AppRouter;
