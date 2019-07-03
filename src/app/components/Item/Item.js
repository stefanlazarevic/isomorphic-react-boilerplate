import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    static: PropTypes.bool.isRequired,
    onArrowUp: PropTypes.func,
    onArrowDown: PropTypes.func,
    onEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    afterReferenceBinding: PropTypes.func,
    onClick: PropTypes.func,
    beforeFocus: PropTypes.func,
    afterFocus: PropTypes.func,
    beforeBlur: PropTypes.func,
    afterBlur: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    static: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        tabIndex={this.props.static ? null : '-1'}
        ref={this.bindReference}
        onClick={this.handleClickEvent}
        onKeyDown={this.handleKeyDownEvent}
      >
        {this.props.children}
      </li>
    );
  }

  bindReference = element => {
    if (this.props.static) {
      return undefined;
    }

    this.ref = element;

    if (typeof this.props.afterReferenceBinding === 'function') {
      this.props.afterReferenceBinding(element);
    }
  };

  handleClickEvent = event => {
    this.focus();

    if (typeof this.props.onClick === 'function') {
      this.props.onClick(event);
    }
  };

  handleKeyDownEvent = event => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        if (typeof this.props.onArrowUp === 'function') {
          this.props.onArrowUp(event);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (typeof this.props.onArrowDown === 'function') {
          this.props.onArrowDown(event);
        }
        break;
      case 'Enter':
        if (typeof this.props.onEnter === 'function') {
          this.props.onEnter(event);
        }
        break;
      default:
      // ...
    }

    if (typeof this.props.onKeyDown === 'function') {
      this.props.onKeyDown(event);
    }
  };

  focus = () => {
    if (this.ref) {
      if (typeof this.props.beforeFocus === 'function') {
        this.props.beforeFocus(this);
      }

      this.ref.focus();

      if (typeof this.props.afterFocus === 'function') {
        this.props.afterFocus(this);
      }
    }
  };

  blur = () => {
    if (this.ref) {
      if (typeof this.props.beforeBlur === 'function') {
        this.props.beforeBlur(this);
      }

      this.ref.blur();

      if (typeof this.props.afterBlur === 'function') {
        this.props.afterBlur(this);
      }
    }
  };
}

export default Item;
