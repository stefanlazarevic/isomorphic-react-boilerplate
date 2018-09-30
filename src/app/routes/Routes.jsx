/**
 * React required imports.
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

import AboutLoadingPage from '../pages/about/AboutPage.loading';
import HomePageLoading from '../pages/home/HomePage.loading';

import NotFoundPage from '../pages/not-found/UnknownPage';

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
        '../pages/home/HomePage'
      ),
      loading: HomePageLoading,
      delay: 300,
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
        '../pages/about/AboutPage'
      ),
      loading: AboutLoadingPage,
      delay: 300,
    })
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
