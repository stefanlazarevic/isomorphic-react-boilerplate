import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import AppRouter from '@routes/Router';
import { Reboot } from '@components';

const AppRoot = () => (
  <Fragment>
    <Reboot />
    <AppRouter />
  </Fragment>
);

export default hot(module)(AppRoot);
