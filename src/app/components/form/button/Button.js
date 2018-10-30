import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

class Button extends Component {
  state = {};
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  static defaultProps = {};

  render() {
    const { props } = this;
    return (
      <button {...props} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default hot(module)(styled(Button)`
  display: block;
  max-width: 200px;
  text-align: center;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`);
