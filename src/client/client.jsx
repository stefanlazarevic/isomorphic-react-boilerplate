import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../app/state/store/global.store';

import ContextProvider from '../contextProvider/ContextProvider';

const store = createStore(window.REDUX_DATA);

Loadable.preloadReady().then(() => {
    const context = { insertCss: () => null};

    hydrate(
        <ReduxProvider store={store}>
            <BrowserRouter>
                <ContextProvider context={context} />
            </BrowserRouter>
        </ReduxProvider>,
        document.getElementById('app')
    );
});
