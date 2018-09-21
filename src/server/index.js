/*
 * Node import group.
 */
import express from 'express';
import fs from 'fs';
import compression from 'compression';
import { minify } from 'html-minifier';
/*
 * React import group.
 */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { getLoadableState } from 'loadable-components/server'
import critical from 'critical';
/*
 * Application import group.
 */
import AppRouter from '../client/components/router/router.component';
import Routes from '../client/routes/routes';
// Prepare HTML Template.
const boilerplateHTML = fs.readFileSync('build/index.html', 'utf8');
const minifiedBoilerplateHTML = minify(boilerplateHTML, {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
});
/*
 * Create express application.
 */
const app = express();
app.use(compression({ level: 8 }));
app.use(express.static('build/public'));
// Handle incoming requests.
app.get('*', (request, response) => {
    let status = 200;
    const context = {};
    const activeRoute = Routes.find(route => matchPath(request.url.toLowerCase(), route));
    if (!activeRoute) {
        status = 404;
    }

    const app = (
        <StaticRouter context={context} location={request.url}>
            <AppRouter />
        </StaticRouter>
    );

    getLoadableState(app).then(loadableState => {
        const html = renderToString(app);
        const helmet = Helmet.renderStatic();
        const title = helmet.title.toString();

        if (context.url) {
            return response.redirect(302, context.url);
        }

        const responseHTML = minifiedBoilerplateHTML
            .replace('{{APP}}', html)
            .replace('{{TITLE}}', title)
            .replace('{{LOADABLE_STATE}}', loadableState.getScriptTag());

        let criticalCSS = null;

        critical.generate({
            width: 1920,
            height: 1080,
            minify: true,
            html: html,
            folder: 'build',
            css: [
                'build/public/css/styles.css'
            ]
        }, (err, output) => {
            if (err) {
                criticalCSS = err;
            } else {
                criticalCSS = output;
            }
        });

        response.status(status).send(responseHTML.replace('{{CRITICAL_CSS}}', `<style>${criticalCSS}</style>`));
    });
});
// Expose server on port 3000.
app.listen(3000, () => {
    console.log('Listening @ port 3000');
});
