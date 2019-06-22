import React, { Component } from 'react';

export default class Header extends Component {
  static displayName = 'Accordion.Header';

  render() {
    return (
      <div tabIndex="0" className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
