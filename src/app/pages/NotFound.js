import React from 'react';
import { Typography } from '@components';

// eslint-disable-next-line
const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <Typography component="h4">Oops, nothing here</Typography>;
};

export default NotFound;
