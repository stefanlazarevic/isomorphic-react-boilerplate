import React from 'react';
import Loadable from 'react-loadable';
import Home from '../pages/Home.page';
import About from '../pages/About.page';

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/about',
        exact: true,
        component: About,
    },
];
