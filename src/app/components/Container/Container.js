import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, ...props }) =>
  React.createElement('div', props, children);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
