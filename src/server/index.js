import express from 'express';
import fs from 'fs';
import compression from 'compression';
import { minify } from 'html-minifier';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import AppRouter from '../client/components/Router.component';
import renderer from './helpers/renderer';

const app = express();

app.use(compression());
app.use(express.static('build/public'));

app.get('*', (request, response) => {
    fs.readFile('build/index.html', 'utf8', (error, html) => {
        let status = 200;
        let content = '';

        if (error) {
            status = 500;
            content = error.message
        } else {
            const context = {};

            content = renderToString(
                <StaticRouter context={context} location={request.url}>
                    <AppRouter />
                </StaticRouter>
            );
        }

        const helmet = Helmet.renderStatic();

        response.status(200).send(minify(renderer(html, content, helmet), {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }));
    });
});

app.listen(3000, () => {
    console.log('Listening @ port 3000');
});
