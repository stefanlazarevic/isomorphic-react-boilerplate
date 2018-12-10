import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
  };

  static defaultProps = {
    checked: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  toggleState = event => {
    event.preventDefault();
    this.setState(currentState => ({ checked: !currentState.checked }));
  };

  handleKeyPress = event => {
    const { keyCode } = event;
    console.info(event);
    console.info(event.keyCode);
    if (keyCode === event.keyCode.ENTER) {
      this.toggleState();
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.toggleState}
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
      >
        <input
          id={this.props.id}
          type="checkbox"
          checked={this.state.checked}
          name={this.props.name}
        />
        <label htmlFor={this.props.name} />
      </div>
    );
  }
}
