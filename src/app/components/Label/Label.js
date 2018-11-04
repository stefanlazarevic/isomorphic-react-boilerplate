import React from 'react';
import PropTypes from 'prop-types';

const Label = (props = {}) => <label {...props}>{props.children}</label>;

Label.propTypes = {
  children: PropTypes.node,
};

Label.defaultProps = {
  children: '',
};

export default Label;
