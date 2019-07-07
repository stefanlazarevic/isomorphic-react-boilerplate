import React from 'react';
import ReactGA from 'react-ga';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { preloadReady } from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '@redux/store';

ReactGA.initialize('');

/**
 * App is a root component for our application.
 * It is shared start point for both client and server side rendering.
 */
import App from '@app/App';

const documentRoot = document.getElementById('root');

const store = createStore(window.REDUX_DATA);

delete window.REDUX_DATA;

/**
 * Webpack HMR Setup.
 */
const HMRRenderer = Component => {
  preloadReady().then(() => {
    module.hot
      ? render(Component, documentRoot)
      : hydrate(Component, documentRoot);
  });
};

const ClientJsx = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

HMRRenderer(ClientJsx);

// webpack Hot Module Replacement API
if (module.hot) {
  console.info('Hot Module Enabled!');
  module.hot.accept('@app/App', () => {
    console.info('HRM!');
    // if you are using harmony modules ({modules:false})
    HMRRenderer(ClientJsx);
  });
}
