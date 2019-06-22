import React, { Component } from 'react';
import { Item, Header, Body } from './components';

export default class Accordion extends Component {
  static displayName = 'Accordion';

  static Item = Item;
  static Header = Header;
  static Body = Body;

  render() {
    return (
      <div className={this.props.className}>
        { React.Children.map(this.props.children, child => {
          if (child.type.displayName === 'Accordion.Item') {
            return child;
          }

          return null;
        }) }
      </div>
    );
  }
}
