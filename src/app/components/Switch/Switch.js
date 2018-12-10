import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from '@util/unique';

export default class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    id: uid(),
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
          name={this.props.name}
          disabled={this.props.disabled}
          aria-hidden="true"
        />
        <label
          htmlFor={this.props.id}
          onKeyDown={this.handleKeyDown}
          tabIndex="0"
          aria-pressed={this.state.checked}
          role="switch"
        />
      </div>
    );
  }
}
