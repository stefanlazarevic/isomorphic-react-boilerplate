import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import { Reboot } from '@components';
import { LightTheme } from '@design';

const AppRoot = () => (
  <Fragment>
    <Reboot />
    <ThemeProvider theme={LightTheme}>
      <AppRouter />
    </ThemeProvider>
  </Fragment>
);

export default hot(AppRoot);
