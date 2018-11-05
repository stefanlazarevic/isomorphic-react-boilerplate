import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import AppRouter from '@routes/Router';
import { Reboot } from '@components';
import theme from '@components/Theme';

const AppRoot = () => (
  <Fragment>
    <Reboot />
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Fragment>
);

export default hot(module)(AppRoot);
