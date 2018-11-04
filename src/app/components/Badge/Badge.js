import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props = {}) => <span {...props}>{props.children}</span>;

Badge.propTypes = {
  children: PropTypes.node,
};

Badge.defaultProps = {};

export default Badge;
