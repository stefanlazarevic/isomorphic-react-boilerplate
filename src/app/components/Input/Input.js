import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from '@util/unique';

class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'search',
      'url',
      'password',
      'hidden',
      'email',
    ]).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    type: 'text',
    disabled: false,
    required: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChangeEvent = event => {
    if (this.props.disabled) return;
    const { value } = event.target;

    this.setState(() => {
      if (this.props.onChange) {
        this.props.onChange(event);
      }

      return { value };
    });
  };

  handleBlurEvent = event => {
    this.props.onBlur && this.props.onBlur(event);
  };

  handleFocusEvent = event => {
    this.props.onBlur && this.props.onFocus(event);
  };

  get value() {
    return this.state.value;
  }

  focus = () => {
    this.input.focus();
  };

  hover = () => {
    this.input.hover();
  };

  render() {
    return (
      <input
        ref={node => (this.input = node)}
        id={this.props.id}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.state.value}
        disabled={this.props.disabled}
        required={this.props.required}
        data-prefix={!!this.props.prefix}
        data-suffix={!!this.props.suffix}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onChange={this.handleChangeEvent}
        tabIndex="0"
      />
    );
  }
}

export default class AdvancedInput extends Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'search',
      'url',
      'password',
      'hidden',
      'email',
    ]).isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    inline: PropTypes.bool,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    id: uid(),
    inline: false,
    prefix: '',
    suffix: '',
  };

  renderInputLabel = () => (
    <label htmlFor={this.props.id}>{this.props.label}</label>
  );

  renderInputPrefix = () => (
    <span data-disabled={this.props.disabled} onClick={this.focus}>
      {this.props.prefix}
    </span>
  );

  renderInputSuffix = () => (
    <span data-disabled={this.props.disabled} onClick={this.focus}>
      {this.props.suffix}
    </span>
  );

  focus = () => {
    this.Input.focus();
  };

  get value() {
    return this.Input.value;
  }

  render() {
    return (
      <div className={this.props.className} data-inline={this.props.inline}>
        {this.props.label ? this.renderInputLabel() : null}
        <div className="Input__wrapper">
          {this.props.prefix ? this.renderInputPrefix() : null}
          <Input ref={node => (this.Input = node)} {...this.props} />
          {this.props.suffix ? this.renderInputSuffix() : null}
        </div>
      </div>
    );
  }
}
