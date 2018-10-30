import React from 'react';
import Loadable from 'react-loadable';
import { exampleAction } from '@redux/actions/example';
import NotFound from '@pages/NotFound';

const Loading = () => <h5>Loading...</h5>;

export default [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "home-page" */
        '@app/pages/Home'),
      loading: Loading,
    }),
  },
  {
    path: '/about',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "about-page" */
        '@app/pages/About'),
      loading: Loading,
    }),
    routes: [
      {
        path: '/about/example',
        exact: true,
        component: Loadable({
          loader: () =>
            import(/* webpackChunkName: "example-page" */
            '@app/pages/Example'),
          loading: Loading,
        }),
        loadInitialData: () => exampleAction(),
      },
      {
        path: '/about/*',
        component: NotFound,
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "login-page" */
        '@app/pages/Login'),
      loading: Loading,
    }),
  },
  {
    path: '*',
    component: NotFound,
  },
];
