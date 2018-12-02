import React from 'react';
import PropTypes from 'prop-types';

const Label = props => {
  return (
    <label className={props.className}>{props.text || props.children}</label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  text: '',
};

export default Label;
