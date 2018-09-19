import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router.component';
import { loadComponents } from 'loadable-components'

loadComponents().then(() => {
    hydrate(
        <BrowserRouter>
            <Router />
        </BrowserRouter>,
        document.getElementById('app')
    );
});
