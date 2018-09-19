import React from 'react';
import loadable from 'loadable-components';
import { Redirect } from 'react-router-dom';

export default [
    {
        path: '/',
        exact: true,
        component: loadable(() => import(
            /* webpackChunkName: "home.page" */
            '../pages/home/home.page'
        )),
    },
    {
        path: '/index',
        exact: true,
        render: () => <Redirect to="/"></ Redirect>
    },
    {
        path: '/about',
        exact: true,
        component: loadable(() => import(
            /* webpackChunkName: "about.page" */
            '../pages/about/about.page'
        )),
    },
    {
        component: loadable(() => import(
            /* webpackChunkName: "not-found.page" */
            '../pages/not-found/not-found.page'
        )),
    }
];
