import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Router from './components/router/router.component';

Loadable.preloadReady().then(() => {
    hydrate(
        <BrowserRouter>
            <Router />
        </BrowserRouter>,
        document.getElementById('app')
    );
});
