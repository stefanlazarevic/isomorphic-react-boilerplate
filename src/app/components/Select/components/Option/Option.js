import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    /** Callback Functions */
    onSelect: PropTypes.func,
    onUnselect: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    selected: false,
    value: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
    };
  }

  /**
   * 1. Set `state.selected` to `true` which indicates that this option is selected.
   * 2. Puts DOM focus on option.
   *
   * @return void
   */
  select = () => {
    if (!this.state.selected && !this.isDisabled()) {
      this.setState(() => ({ selected: true }));
      this.focus();
    }
  };

  /**
   * 1. Set `state.selected` to `false` which indicates that this option is not selected.
   * 2. Removes DOM focus from option.
   *
   * @return void
   */
  unselect = () => {
    if (this.state.selected && !this.isDisabled()) {
      this.setState(() => ({ selected: false }));
      this.blur();
    }
  };

  /**
   * 1. Makes option DOM element in focus.
   *
   * @return void
   */
  focus = () => {
    this.DOMNode.focus();
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  /**
   * 1. Removes focus from option DOM element.
   *
   * @return void
   */
  blur = () => {
    this.DOMNode.blur();
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  /**
   * Returns current state of selection for the option.
   *
   * @return {boolean} state.selected
   */
  isSelected = () => this.state.selected;

  /**
   * Returns current focused state of the option.
   *
   * @return {boolean}
   */
  isFocused = () => document.activeElement === this.DOMNode;

  /**
   * Returns option disabled state.
   *
   * @return {boolean}
   */
  isDisabled = () => this.props.disabled;

  /**
   * Determines whether the option is in readonly mode or not.
   *
   * @return {boolean}
   */
  isReadonly = () => this.props.readonly;

  /**
   * Returns value of the option.
   *
   * 1. In case where the property value is missing, property label is used as value.
   *
   * @return {string}
   */
  getValue = () => this.props.value || this.props.label;

  /**
   * Handle keyboard event when option is in focus.
   *
   * @return void
   */
  handleKeyboardEvent = event => {
    event.preventDefault();
    const { which } = event;

    /** 13 = Enter */
    if (which === 13) {
      this.select();
    }

    /** 38 = Arrow up, 40 = Arrow down */
    if (which === 38 || which === 40) {
      this.blur();
    }
  };

  /** Component lifecycle events. */

  componentDidUpdate(previousProps, previousState) {
    if (previousState.selected === false && this.state.selected === true) {
      this.props.onSelect && this.props.onSelect();
    }

    if (previousState.selected === true && this.state.selected === false) {
      this.props.onUnselect && this.props.onUnselect();
    }
  }

  render() {
    return (
      <div
        ref={node => (this.DOMNode = node)}
        className={`
          ${this.props.className}
          ${this.state.selected ? 'selected' : ''}
        `}
        role="option"
        aria-disabled={this.props.disabled}
        aria-selected={this.state.selected}
        tabIndex="-1"
        onClick={this.select}
        onKeyDown={this.handleKeyboardEvent}
      >
        {this.props.label || this.props.children}
      </div>
    );
  }
}
