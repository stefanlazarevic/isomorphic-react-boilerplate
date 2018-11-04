import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, ...props }) => (
  <button onClick={onClick} {...props}>
    {props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
