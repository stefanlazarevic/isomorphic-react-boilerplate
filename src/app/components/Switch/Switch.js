import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    return (
      <div className={this.props.className}>
        <input type="checkbox" />
        <label />
      </div>
    );
  }
}
