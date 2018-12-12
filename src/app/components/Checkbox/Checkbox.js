import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from '@util/unique';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    id: uid(),
    checked: false,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  toggleState = event => {
    this.setState(currentState => {
      if (this.props.onChange) {
        this.props.onChange(event, !currentState.checked);
      }

      return { checked: !currentState.checked };
    });
  };

  handleKeyDown = event => {
    const { keyCode } = event;

    /** 13 => Enter, 32 => Space */
    if (keyCode === 13 || keyCode === 32) {
      this.toggleState();
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <input
          id={this.props.id}
          type="checkbox"
          checked={this.state.checked}
          onChange={this.toggleState}
          disabled={this.props.disabled}
        />
        <label
          htmlFor={this.props.id}
          tabIndex="0"
          onKeyDown={this.handleKeyDown}
          aria-pressed={this.state.checked}
        >
          <span>{this.props.label || this.props.children}</span>
        </label>
      </div>
    );
  }
}
