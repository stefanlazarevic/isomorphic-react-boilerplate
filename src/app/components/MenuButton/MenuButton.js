import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MenuButton extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired
  };

  static defaultProps = {
    open: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.open === true && this.state.open !== nextState.open) {
      if (typeof this.props.beforeOpening === 'function') {
        this.props.beforeOpening();
      }
    }

    if (nextState.open === false && this.state.open !== nextState.open) {
      if (typeof this.props.beforeClosing === 'function') {
        this.props.beforeClosing();
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open === true && this.state.open !== prevState.open) {
      if (typeof this.props.afterOpening === 'function') {
        this.props.afterOpening();
      }
    }

    if (this.state.open === false && this.state.open !== prevState.open) {
      if (typeof this.props.afterClosing === 'function') {
        this.props.afterClosing();
      }
    }
  }

  handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.open();
        break;
      case ' ':
        this.open();
        break;
      case 'Enter':
        this.open();
        break;
      default:
        // ...
    }
  }

  open = () => this.setState(() => { open: true })

  render() {
    return <div role="button" tabIndex="0" onKeyDown={this.handleKeyDown}>
      <span>{this.props.children}</span>
    </div>
  }
}
