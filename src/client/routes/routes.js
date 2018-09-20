import React from 'react';
import Loadable from 'loadable-components';
import { Redirect } from 'react-router-dom';

export default [
    {
        path: '/',
        exact: true,
        component: Loadable(() => import(
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
        component: Loadable(() => import(
            /* webpackChunkName: "about.page" */
            '../pages/about/about.page'
        )),
    },
    {
        component: Loadable(() => import(
            /* webpackChunkName: "not-found.page" */
            '../pages/not-found/not-found.page'
        )),
    }
];
