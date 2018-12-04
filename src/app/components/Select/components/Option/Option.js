import React from 'react';
import PropTypes from 'prop-types';

const Option = props => {
  return (
    <li
      className={props.className}
      role="option"
      onClick={event =>
        props.disabled || props.onClick(event, props.value, props.label)
      }
      aria-disabled={props.disabled}
      data-disabled={props.disabled}
    >
      {props.label}
    </li>
  );
};

Option.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Option.defaultProps = {
  disabled: false,
};

export default Option;
