import React from 'react';
import Loadable from 'react-loadable';
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
      },
      {
        path: '/about/*',
        component: NotFound,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];
