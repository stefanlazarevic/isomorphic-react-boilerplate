import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsable from '@components';
import { Consumer } from '../../Accordion.context';

export default class Panel extends Component {
  static displayName = 'Accordion.Panel';

  static propTypes = {
    className: PropTypes.string,

    children: PropTypes.node,
  };

  render() {
    return (
      <Consumer>
        {() => {
          return <Collapsable>{this.props.children}</Collapsable>;
        }}
      </Consumer>
    );
  }
}
