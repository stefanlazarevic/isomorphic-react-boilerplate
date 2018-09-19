import loadable from 'loadable-components'

export default [
    {
        path: '/',
        exact: true,
        component: loadable(() => import(
            /* webpackChunkName: "home.page" */
            '../pages/home/Home.page'
        )),
    },
    {
        path: '/about',
        exact: true,
        component: loadable(() => import(
            /* webpackChunkName: "about.page" */
            '../pages/about/About.page'
        )),
    },
    {
        component: loadable(() => import(
            /* webpackChunkName: "notfound.page" */
            '../pages/not-found/NotFound.page'
        )),
    }
];
