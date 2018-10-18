import React from 'react';
import Loadable from 'react-loadable';
import NotFound from '@app/pages/NotFound';

import { exampleAction } from '@app/actions/example';

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
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "about-page" */
        '@app/pages/About'),
      loading: Loading,
    }),
  },
  {
    path: '/example',
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
    path: '**',
    component: NotFound,
  },
];
