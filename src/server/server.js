import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import minifyCssString from 'minify-css-string';
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { ServerStyleSheet } from 'styled-components';
import stats from '../../dist/static/react-loadable.json';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '@app/stores/store';
import 'isomorphic-fetch';
import compression from 'compression';

const templateHTML = fs.readFileSync('dist/index.html', 'utf8');

import AppRoutes from '@app/routes/index';
import AppRoot from '@app/AppRoot';

const app = express();
app.use(bodyParser.json());
app.use(compression({ level: 6 }));
app.use('/static', express.static('dist/static', { maxage: '31557600h' }));

app.get('/*', (request, response) => {
  const { url } = request;
  const context = {};
  const store = createStore();
  let status = 404;

  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const metadata = helmet.meta.toString();

  Helmet.rewind();

  const activeRoute = AppRoutes.find(route =>
    matchPath(url.toLowerCase(), route)
  );

  const activeRoutes = AppRoutes.filter(route =>
    matchPath(url.toLowerCase(), route)
  );

  if (activeRoute.path !== '**') {
    status = 200;
  }

  const preloadedComponents = Promise.all(
    activeRoutes
      .filter(route => route.component.preload)
      .map(route => route.component.preload())
  );

  const preloadedData = Promise.all(
    activeRoutes
      .filter(route => route.loadInitialData)
      .map(route => store.dispatch(route.loadInitialData()))
  );

  Promise.all([preloadedComponents, preloadedData]).then(() => {
    const modules = [];
    const sheet = new ServerStyleSheet();

    const jsx = (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <ReduxProvider store={store}>
          <StaticRouter context={context} location={url}>
            <AppRoot />
          </StaticRouter>
        </ReduxProvider>
      </Loadable.Capture>
    );

    const html = renderToString(sheet.collectStyles(jsx));

    if (context.url) {
      return response.redirect(302, context.url);
    }

    const reduxState = store.getState();
    const styleTags = sheet.getStyleTags();
    const bundles = getBundles(stats, modules);

    const bundleScripts = bundles
      .map(bundle => `<script src="${bundle.publicPath}"></script>`)
      .join('');

    const responseHTML = templateHTML
      .replace('{{TITLE}}', title)
      .replace('{{SEO_CRITICAL_METADATA}}', metadata)
      .replace('{{CRITICAL_CSS}}', minifyCssString(styleTags))
      .replace('{{APP}}', html)
      .replace('{{LOADABLE_CHUNKS}}', bundleScripts)
      .replace('{{REDUX_DATA}}', serialize(reduxState));

    response.status(status).send(responseHTML);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.info(`HTTP Server is listening @ port 3000`);
  });
});
