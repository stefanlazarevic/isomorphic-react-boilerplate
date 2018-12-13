import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    return (
      <li
        className={this.props.className}
        role="option"
        aria-disabled={this.props.disabled}
        data-disabled={this.props.disabled}
        {...this.props}
      >
        {this.props.children}
      </li>
    );
  }
}
