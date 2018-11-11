import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      'text',
      'search',
      'url',
      'password',
      'hidden',
      'email',
    ]),
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    autoComplete: PropTypes.bool,
    disabled: PropTypes.bool,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
  };

  static defaultProps = {
    label: '',
    type: 'text',
    value: '',
    placeholder: '',
    autoComplete: false,
    disabled: false,
  };

  get value() {
    return (this.props.prefix + this.input.value + this.props.suffix).trim();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.label ? (
          <label htmlFor={this.props.name}>{this.props.label}</label>
        ) : null}
        <div>
          {this.props.prefix ? <span>{this.props.prefix}</span> : null}
          <input
            ref={input => (this.input = input)}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={() =>
              this.props.onChange && this.props.onChange(this.value)
            }
            onError={error => this.props.onError && this.props.onError(error)}
            autoComplete={this.props.autoComplete}
            disabled={this.props.disabled}
          />
          {this.props.suffix ? <span>{this.props.suffix}</span> : null}
        </div>
      </div>
    );
  }
}