import express from 'express';
import fs from 'fs';
import compression from 'compression';
import { minify } from 'html-minifier';

import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import AppRouter from '../client/components/router/Router.component';
import Routes from '../client/routes/Routes';

import { getLoadableState } from 'loadable-components/server'

const boilerplateHTML = fs.readFileSync('build/index.html', 'utf8');
const minifiedBoilerplateHTML = minify(boilerplateHTML, {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
});

const app = express();
app.use(compression({ level: 8 }));
app.use(express.static('build/public'));

app.get('*', (request, response) => {
    let status = 200;
    const context = {};
    const activeRoute = Routes.find(route => matchPath(request.url.toLowerCase(), route));

    const app = (
        <StaticRouter context={context} location={request.url}>
            <AppRouter />
        </StaticRouter>
    );

    getLoadableState(app).then(loadableState => {
        const html = renderToString(app);
        const helmet = Helmet.renderStatic();
        const title = helmet.title.toString();

        if (!activeRoute) {
            status = 404;
        }

        if (context.url) {
            return response.redirect(302, context.url);
        }

        const responseHTML = minifiedBoilerplateHTML
            .replace('{{APP}}', html)
            .replace('{{TITLE}}', title)
            .replace('{{LOADABLE_STATE}}', loadableState.getScriptTag());

        response.status(status).send(responseHTML);
    });

});

app.listen(3000, () => {
    console.log('Listening @ port 3000');
});
