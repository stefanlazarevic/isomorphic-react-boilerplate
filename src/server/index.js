import express from 'express';
import fs from 'fs';
import compression from 'compression';
import { minify } from 'html-minifier';

import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import AppRouter from '../client/components/Router.component';

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
app.use(compression());
app.use(express.static('build/public'));

app.get('*', (request, response) => {
    const app = renderToString(
        <StaticRouter context={{}} location={request.url}>
            <AppRouter />
        </StaticRouter>
    );

    const responseHTML = minifiedBoilerplateHTML.replace('{{APP}}', app);
    response.status(200).send(responseHTML);
});

app.listen(3000, () => {
    console.log('Listening @ port 3000');
});
