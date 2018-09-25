/**
 * Node import group.
 */
import express from 'express';
import fs from 'fs';
import compression from 'compression';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';
import serialize from 'serialize-javascript';

/**
 * React import group.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

/**
 * Redux import group.
 */
import { Provider as ReduxProvider } from "react-redux";
import createStore from "../app/state/store/global.store";

/**
 * Application import group.
 */
import AppRouter from '../app/routes/app-router';
import Routes from '../app/routes/app-routes';
import stats from '../../react-loadable.json';

/**
 * Prepare HTML Template.
 */
const templateHTML = fs.readFileSync('build/index.html', 'utf8');

/**
 * Create express application.
 */
const app = express();
app.use(bodyParser.json());
app.use(compression({ level: 8 }));
app.use(express.static('build/public'));

/**
 * Handle incoming requests.
 */
app.get('*', (request, response, next) => {
    /**
     * Initial response status.
     * 200 = OK.
     */
    let status = 200;

    /**
     * Determine which component should be loaded for current request.
     */
    const activeRoute = Routes.find(route => matchPath(request.url.toLowerCase(), route));

    /**
     * Extract information from activeRoute.
     */
    const { path } = activeRoute;

    if (path === '**') {
        status = 404;
    }

    const context = {};
    const store = createStore();

    const loadedComponents = Promise.all(
        Routes
            .filter(route => matchPath(request.url.toLowerCase(), route))
            .map(route => route.component.preload())
    );

    loadedComponents.then(components => {
        const FType = '[object Function]';
        const AType = '[object Array]';

        const componentsPromise =
            components
                .map(loadableComponent => loadableComponent.default)
                .filter(pageComponent => {
                    const SFT = Object.prototype.toString.apply(pageComponent.serverFetchInitialData);
                    return pageComponent.serverFetchInitialData && (SFT === FType || SFT === AType);
                })
                .map(pageComponent => {
                    const SFT = Object.prototype.toString.apply(pageComponent.serverFetchInitialData);

                    if (SFT === FType) {
                        return store.dispatch(pageComponent.serverFetchInitialData());
                    } else {
                        // Handle array of actions.
                        return Promise.all(
                            pageComponent.serverFetchInitialData
                                .filter(action => typeof action === 'function')
                                .map(action => store.dispatch(action()))
                        );
                    }
                });

        Promise.all(componentsPromise).then(() => {
            const modules = [];

            const jsx = (
                <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                    <ReduxProvider store={store}>
                        <StaticRouter context={context} location={request.url}>
                            <AppRouter />
                        </StaticRouter>
                    </ReduxProvider>
                </Loadable.Capture>
            );

            const reduxState = store.getState();

            const body = renderToString(jsx);
            const bundles = getBundles(stats, modules);

            if (context.url) {
                return response.redirect(302, context.url);
            }

            /**
             * Extract page data from React Helmet.
             */
            const helmet = Helmet.renderStatic();
            const pageTitle = helmet.title.toString();
            const seoMetadata = helmet.meta.toString();

            Helmet.rewind();

            /**
             * Extract used chunks to render page from react-loadable library.
             * [IMPORTANT] Use defer in order to load chunk last and prevent undefined webpackJsonp issue.
             */
            const bundleScripts = bundles.map(bundle => `<script src="${bundle.publicPath}"></script>`).join('');

            const responseHTML = templateHTML
                .replace('{{TITLE}}', pageTitle)
                .replace('{{SEO_CRITICAL_METADATA}}', seoMetadata)
                .replace('{{APP}}', body)
                .replace('{{LOADABLE_CHUNKS}}', bundleScripts)
                .replace('{{REDUX_DATA}}', serialize(reduxState));

            response.status(status).send(responseHTML);
        }).catch(next);
    });
});

/*
 * Preload all loadable components.
 * Expose server on port 3000.
 */
Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log('Listening @ port 3000');
    });
});
