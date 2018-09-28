import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      text,
      icon,
      iconRight,
      className,
      round,
      disabled,
      onClick,
      type
    } = this.props;

    const roundClass = round ? classes.round : undefined;
    const disabledClass = disabled ? classes.disabled : undefined;

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={classnames(classes.button, className, roundClass, disabledClass)}
      >
        {icon && !iconRight && <i className={icon} />}
        <span>{text || children}</span>
        {icon && iconRight && <i className={icon} />}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  children: PropTypes.any
};

Button.defaultProps = {
  type: 'button',
  onClick: () => undefined
};


export default Button;
