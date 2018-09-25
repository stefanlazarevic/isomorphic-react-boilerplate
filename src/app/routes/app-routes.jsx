/**
 * React required imports.
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

/**
 * Application route map.
 * Pages are split into bundles for better performances
 * using 'react-loadable' library.
 */
export default [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import(
                /* webpackChunkName: "js/chunks/home-page" */
                '../pages/home/home-page'
            ),
            loading: () => <div>Loading...</div>
        }),
    },
    {
        path: '/index',
        exact: true,
        component: () => <Redirect to="/"></ Redirect>
    },
    {
        path: '/about',
        exact: true,
        component: Loadable({
            loader: () => import(
                /* webpackChunkName: "js/chunks/about-page" */
                '../pages/about/about-page'
            ),
            loading: () => <div>Loading...</div>
        })
    },
    {
        path: '**',
        component: Loadable({
            loader: () => import(
                /* webpackChunkName: "js/chunks/not-found-page" */
                '../pages/not-found/not-found-page'
            ),
            loading: () => <div>Loading...</div>
        })
    }
];
