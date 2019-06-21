import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuButton, List } from '@components';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div className={this.props.className}>
      <MenuButton>Menu</MenuButton>
    </div>
  }
}
