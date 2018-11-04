import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, ...props }) => (
  <input onChange={onChange} {...props} />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
