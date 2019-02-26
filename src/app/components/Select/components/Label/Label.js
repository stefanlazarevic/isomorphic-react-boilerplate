import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    value: '',
    placeholder: 'Select an option',
  };

  state = {
    value: this.props.value,
  };

  setValue = value => this.setState(() => ({ value }));

  render() {
    return (
      <p
        role="label"
        data-placeholder={Boolean(!this.state.value.length)}
        className={this.props.className}
      >
        {this.state.value || this.props.placeholder}
      </p>
    );
  }
}
