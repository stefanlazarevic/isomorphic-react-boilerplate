import React from 'react';
import { Heading } from '@components';

// eslint-disable-next-line
const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <Heading>Oops, nothing here!</Heading>;
};

export default NotFound;
