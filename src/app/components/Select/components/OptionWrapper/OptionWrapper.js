import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from '../Option/Option.styled';

export default class OptionWrapper extends Component {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    open: PropTypes.bool,
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

    this.focusedIndex = 0;
    this.selectedIndex = -1;

    this.state = {
      open: props.open,
    };
  }

  isOpen = () => this.state.open;

  open = () => {
    this.setState(() => ({ open: true }));
  };

  close = () => this.setState(() => ({ open: false }));

  handleKeyboardInput = event => {
    const { which } = event;

    if (which === 40) {
      this.focusNextOption(1);
    }

    if (which === 38) {
      this.focusNextOption(-1);
    }
  };

  focusNextOption = (directionSteps = 0) => {
    let newIndex = this.focusedIndex + directionSteps;
    const goingDown = directionSteps > 0;

    if (newIndex > this.Options.length - 1 && goingDown) {
      newIndex = 0;
    }

    if (newIndex < 0 && !goingDown) {
      newIndex = this.Options.length - 1;
    }

    this.focusedIndex = newIndex;

    if (this.Options[newIndex].isDisabled()) {
      console.info('Disabled');
      this.focusNextOption(goingDown ? 1 : -1);
    }

    this.Options[this.focusedIndex].focus();
  };

  focusFirstOption = () => {
    this.focusedIndex = 0;
    if (this.Options[0]) {
      this.Options[0].focus();
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

  componentDidUpdate(previousProps, previousState) {
    if (previousState.open === false && this.state.open === true) {
      this.props.onOpen && this.props.onOpen();
      this.Options[this.selectedIndex] &&
        this.Options[this.selectedIndex].focus();
    }

    if (previousState.open === true && this.state.open === false) {
      this.props.onClose && this.props.onClose();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.open !== this.state.open;
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
              index={index}
              label={option.label}
              disabled={option.disabled}
              onSelect={this.handleOptionSelection}
            />
          );
        })}
      </div>
    );
  }
}
