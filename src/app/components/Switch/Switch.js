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

  render() {
    return (
      <div className={this.props.className}>
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
