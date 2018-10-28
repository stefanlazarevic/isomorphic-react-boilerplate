import React from 'react';
import { hot } from 'react-hot-loader';
import AppRouter from '@routes/Router';

const AppRoot = () => <AppRouter />;

export default hot(module)(AppRoot);
