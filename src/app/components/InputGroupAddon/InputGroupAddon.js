import React from 'react';
import PropTypes from 'prop-types';

const InputGroupAddon = props => (
  <div className={props.className} data-position={props.position}>
    {props.children}
  </div>
);

InputGroupAddon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.oneOf(['prepend', 'append']).isRequired,
};

InputGroupAddon.defaultProps = {};

export default InputGroupAddon;
