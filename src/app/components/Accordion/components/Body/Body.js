import React, { Component } from 'react';
import { Collapsable } from '@components';

export default class Body extends Component {
  static displayName = 'Accordion.Body';

  render() {
    return (
      <Collapsable expanded={this.props.expanded}>
        {this.props.children}
      </Collapsable>
    );
  }
}
