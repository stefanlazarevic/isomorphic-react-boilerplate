import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props = {}) => (
  <span className={props.className}>{props.children || props.text}</span>
);

Badge.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  className: PropTypes.string,
};

Badge.defaultProps = {
  text: '',
};

export default Badge;
