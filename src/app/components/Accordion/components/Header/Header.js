import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static displayName = 'Accordion.Header';

  static propTypes = {
    onSpaceKeyDown: PropTypes.func,
    onEnterKeyDown: PropTypes.func,
    onArrowDownKeyDown: PropTypes.func,
    onArrowUpKeyDown: PropTypes.func,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
  };

  onKeyDown = event => {
    switch (event.key) {
      case ' ':
        if (this.props.onSpaceKeyDown) {
          this.props.onSpaceKeyDown(event);
        }
      break;
      case 'Enter':
        if (this.props.onEnterKeyDown) {
          this.props.onEnterKeyDown(event);
        }
      break;
      case 'ArrowDown':
        event.preventDefault();

        if (this.props.onArrowDownKeyDown) {
          this.props.onArrowDownKeyDown(event);
        }
      break;
      case 'ArrowUp':
        event.preventDefault();

        if (this.props.onArrowUpKeyDown) {
          this.props.onArrowUpKeyDown(event);
        }
      break;
      default:
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
    }
  }

  render() {
    return (
      <div
        tabIndex="0"
        className={this.props.className}
        onClick={this.props.onClick}
        onKeyDown={this.onKeyDown}
      >
        {this.props.children}
      </div>
    );
  }
}
