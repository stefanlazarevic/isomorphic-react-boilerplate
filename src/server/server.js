import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import minifyCssString from 'minify-css-string';
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { ServerStyleSheet } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import 'isomorphic-fetch';
import compression from 'compression';

const templateHTML = fs.readFileSync('dist/index.html', 'utf8');
const stats = JSON.parse(fs.readFileSync('dist/static/react-loadable.json'));

import AppRoutes from '@routes/web/public';
import App from '@app/App';
import createStore from '@redux/store';

const app = express();
app.use(bodyParser.json());
app.use(compression({ level: 6 }));
app.use('/static', express.static('dist/static', { maxage: '31557600h' }));

app.get('/*', (request, response) => {
  const { url } = request;
  const context = {};
  const store = createStore();
  let status = 200;

  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const metadata = helmet.meta.toString();

  Helmet.rewind();

  const activeRoutes = matchRoutes(AppRoutes, url.toLowerCase()).map(
    matched => matched.route
  );

  const components = Promise.all(
    activeRoutes
      .filter(route => route.component.preload)
      .map(route => route.component.preload())
  );

  components.then(components => {
    const serverData = components
      .map(component => component.default)
      .filter(component => component.serverPreloadData)
      .map(component => store.dispatch(component.serverPreloadData()));

    Promise.all(serverData).then(() => {
      const modules = [];
      const sheet = new ServerStyleSheet();

      const jsx = (
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <ReduxProvider store={store}>
            <StaticRouter context={context} location={url}>
              <App />
            </StaticRouter>
          </ReduxProvider>
        </Loadable.Capture>
      );

      const html = renderToString(sheet.collectStyles(jsx));

      if (context.status === 404) {
        status = 404;
      }

      if (context.url) {
        return response.redirect(302, context.url);
      }

      const reduxState = store.getState();
      const styleTags = sheet.getStyleTags();

      // eslint-ignore-line
      console.info(styleTags);

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
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.info(`HTTP Server is listening @ port 3000`);
  });
});
