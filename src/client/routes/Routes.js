import Loadable from 'react-loadable';
import PageLoader from '../components/Loaders/PageLoader';

export default [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import(
                /* webpackChunkName: "home.page" */
                '../pages/Home.page'
            ),
            loading: () => PageLoader(),
        }),
    },
    {
        path: '/about',
        exact: true,
        component: Loadable({
            loader: () => import(
                /* webpackChunkName: "about.page" */
                '../pages/About.page'
            ),
            loading: () => PageLoader(),
        }),
    },
];
