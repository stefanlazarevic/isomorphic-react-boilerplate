import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children);

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
