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
import createStore, { initializeSession } from "../app/redux/store";

/**
 * Application import group.
 */
import AppRouter from '../app/components/router/router.component';
import Routes from '../app/routes/routes';
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
app.get('*', (request, response) => {
    let status = 200;
    const context = {};
    const modules = [];
    const store = createStore();
    store.dispatch(initializeSession());

    const loadedComponents = Promise.all(
        Routes
            .filter(route => matchPath(request.url.toLowerCase(), route))
            .map(route => route.component.preload())
    );

    loadedComponents.then(components => {
        const componentsPromise =
            components.map(component => component.default)
                .filter(component => component.serverFetch)
                .map(component => store.dispatch(component.serverFetch()));

        Promise.all(componentsPromise).then(() => {
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

            /**
             * Extract used chunks to render page from react-loadable library.
             * [IMPORTANT] Use defer in order to load chunk last and prevent undefined webpackJsonp issue.
             */
            const bundleScripts = bundles.map(bundle => `<script defer src="${bundle.publicPath}"></script>`).join('');

            const responseHTML = templateHTML
                .replace('{{TITLE}}', pageTitle)
                .replace('{{SEO_CRITICAL_METADATA}}', seoMetadata)
                .replace('{{APP}}', body)
                .replace('{{LOADABLE_CHUNKS}}', bundleScripts)
                .replace('{{REDUX_DATA}}', serialize(reduxState));

            response.status(status).send(responseHTML);
        });
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
