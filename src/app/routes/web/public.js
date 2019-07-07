import React from 'react';
import universal from 'react-universal-component';
import NotFound from '@pages/NotFound';

const Loading = () => <h5>Loading...</h5>;

export default [
  {
    path: '/',
    exact: true,
    component: universal(
      () =>
        import(/* webpackChunkName: "home-page" */
        '@app/pages/Home'),
      {
        loading: Loading,
      }
    ),
  },
  {
    path: '/about',
    component: universal(
      () =>
        import(/* webpackChunkName: "about-page" */
        '@app/pages/About'),
      {
        loading: Loading,
      }
    ),
    routes: [
      {
        path: '/about/example',
        exact: true,
        component: universal(
          () =>
            import(/* webpackChunkName: "example-page" */
            '@app/pages/Example'),
          {
            loading: Loading,
          }
        ),
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
