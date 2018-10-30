import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

class Input extends Component {
  state = {
    value: this.props.value,
  };

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  onChange = event => this.setState(() => ({ value: event.value }));

  render() {
    const { props } = this;

    return (
      <input {...props} value={this.state.value} onChange={this.onChange} />
    );
  }
}

export default hot(module)(styled(Input)`
  display: block;
  padding: 10px 15px;
  margin-bottom: 15px;
`);
