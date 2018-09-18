import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router.component';

ReactDOM.hydrate(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('app')
);
