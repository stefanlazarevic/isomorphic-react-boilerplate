import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = props => (
  <div className={props.className}>{props.children}</div>
);

InputGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

InputGroup.defaultProps = {};

export default InputGroup;
