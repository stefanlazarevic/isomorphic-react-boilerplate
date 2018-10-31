import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const Input = ({ type, onChange, ...props }) => {
  return <input type={type} onChange={onChange} {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default hot(module)(Input);
