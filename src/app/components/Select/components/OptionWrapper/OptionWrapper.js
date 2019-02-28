import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from '../Option/Option.styled';

export default class OptionWrapper extends Component {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    open: PropTypes.bool,
    /** Callback Functions. */
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    open: false,
  };

  constructor(props) {
    super(props);

    this.Options = [];

    this.focusedIndex = -1;
    this.selectedIndex = -1;

    this.state = {
      open: props.open,
    };
  }

  /**
   * Returns the current state of option list visibility.
   *
   * @return {boolean}
   */
  isOpen = () => this.state.open;

  /**
   * Make option list visible.
   */
  open = () => {
    if (this.props.options.length) {
      this.setState(() => ({ open: true }));
    }
  };

  /**
   * Make option list invisible.
   */
  close = () => this.setState(() => ({ open: false }));

  /**
   * Reset focused option index to initial value.
   */
  resetFocusIndex = () => {
    this.focusedIndex = -1;
  };

  /**
   * Handle keyboard input while the focus is inside option list.
   */
  handleKeyboardInput = event => {
    event.preventDefault();
    const { which } = event;

    /** 40 = Keyboard down. */
    if (which === 40) {
      this.focusNextOption();
    }

    /** 38 = Keyboard up. */
    if (which === 38) {
      this.focusPreviousOption();
    }
  };

  /**
   * Recursive function that focuses first valid option in the list.
   */
  focusNextOption = () => {
    let newFocusedIndex = this.focusedIndex + 1;

    do {
      if (newFocusedIndex >= this.Options.length) {
        newFocusedIndex = 0;
      }

      const option = this.Options[newFocusedIndex];

      if (option.isDisabled() || option.isReadonly()) {
        newFocusedIndex++;
      } else {
        option.focus();

        this.focusedIndex = newFocusedIndex;
        break;
      }
    } while (this.focusedIndex !== newFocusedIndex);
  };

  /**
   * Recursive function that focuses first valid option in the list.
   */
  focusPreviousOption = () => {
    let newFocusedIndex = this.focusedIndex - 1;

    do {
      if (newFocusedIndex < 0) {
        newFocusedIndex = this.Options.length - 1;
      }

      const option = this.Options[newFocusedIndex];

      if (option.isDisabled() || option.isReadonly()) {
        newFocusedIndex--;
      } else {
        option.focus();

        this.focusedIndex = newFocusedIndex;
        break;
      }
    } while (this.focusedIndex !== newFocusedIndex);
  };

  /**
   * Focuses first valid option.
   */
  focusSelectedOption = () => {
    if (this.Options[this.selectedIndex]) {
      this.Options[this.selectedIndex].focus();
    } else {
      this.resetFocusIndex();
      this.focusNextOption();
    }
  };

  handleOptionSelection = nextSelectedIndex => {
    if (this.Options[this.selectedIndex]) {
      this.Options[this.selectedIndex].unselect();
    }

    this.selectedIndex = nextSelectedIndex;
    this.focusedIndex = nextSelectedIndex;
    this.props.onSelect && this.props.onSelect(this.getValue());
  };

  getValue = () => {
    if (this.Options[this.selectedIndex]) {
      return this.Options[this.selectedIndex].getValue();
    }
  };

  /** Component lifecycle events. */

  componentDidUpdate(previousProps, previousState) {
    if (previousState.open === false && this.state.open === true) {
      this.focusSelectedOption();
      this.props.onOpen && this.props.onOpen();
    }

    if (previousState.open === true && this.state.open === false) {
      this.props.onClose && this.props.onClose();
    }
  }

  render() {
    return (
      <div
        className={`${this.props.className} ${
          this.state.open ? 'opened' : 'closed'
        }`}
        tabIndex="-1"
        onKeyDown={this.handleKeyboardInput}
      >
        {this.props.options.map((option, index) => {
          if (option.selected) {
            this.selectedIndex = index;
          }

          return (
            <Option
              innerRef={node => (this.Options[index] = node)}
              key={index}
              label={option.label}
              disabled={option.disabled}
              onSelect={() => this.handleOptionSelection(index)}
            />
          );
        })}
      </div>
    );
  }
}
