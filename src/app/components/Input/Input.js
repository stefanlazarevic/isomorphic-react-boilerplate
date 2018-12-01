import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
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

  focus = () => this.input.focus();

  hover = () => this.input.hover();

  render() {
    return (
      <input
        ref={node => (this.input = node)}
        id={this.props.id}
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.state.value}
        disabled={this.props.disabled}
        required={this.props.required}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onChange={this.handleChangeEvent}
        tabIndex="0"
      />
    );
  }
}
