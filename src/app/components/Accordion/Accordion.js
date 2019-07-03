import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Header, Panel } from './components';
import { getProp } from '@util/helpers';
import { Provider } from './Accordion.context';

export default class Accordion extends Component {
  static displayName = 'Accordion';

  static Item = Item;
  static Header = Header;
  static Panel = Panel;

  static propTypes = {
    allowedMultipleOpen: PropTypes.bool,

    className: PropTypes.string,

    children: PropTypes.node,
  };

  static defaultProps = {
    allowedMultipleOpen: false,
  };

  render() {
    return (
      <Provider allowedMultipleOpen={this.props.allowedMultipleOpen}>
        <div className={this.props.className}>
          {React.Children.map(this.props.children, child => {
            if (getProp(child, ['type', 'displayName']) === 'Accordion.Item') {
              return child;
            }

            return null;
          })}
        </div>
      </Provider>
    );
  }
}
