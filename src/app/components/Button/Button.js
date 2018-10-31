import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const Button = ({ type, onClick, ...props }) => {
  return (
    <button type={type} onClick={onClick} {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default hot(module)(Button);
