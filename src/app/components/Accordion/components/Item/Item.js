import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProp } from '@util/helpers';

export default class Item extends Component {
  static displayName = 'Accordion.Item';

  static propTypes = {
    expanded: PropTypes.bool.isRequired,

    className: PropTypes.string,

    children: PropTypes.node,
  };

  static defaultProps = {
    expanded: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.header = React.createRef();
    this.body = React.createRef();
  }

  render() {
    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, child => {
          if (
            getProp(child, ['type', 'target', 'displayName']) ===
            'Accordion.Header'
          ) {
            const props = {
              innerRef: this.header,
              ...child.props,
              expanded: this.props.expanded,
              // onClick: () => this.body.current.toggle(),
              // onArrowDownKeyDown: () => this.body.current.expand(),
              // onArrowUpKeyDown: () => this.body.current.collapse(),
              // onSpaceKeyDown: () => this.body.current.toggle(),
              // onEnterKeyDown: () => this.body.current.toggle(),
            };

            return React.cloneElement(child, props);
          }

          if (
            getProp(child, ['type', 'target', 'displayName']) ===
            'Accordion.Panel'
          ) {
            const props = {
              innerRef: this.body,
              ...child.props,
              expanded: this.props.expanded,
            };

            // if (!this.props.allowedMultipleOpen) {
            //   props.beforeExpansion = () => {
            //     if (this.props.beforeExpansion) {
            //       this.props.beforeExpansion(this.body)
            //     }
            //   };
            // }

            return React.cloneElement(child, props);
          }

          return null;
        })}
      </div>
    );
  }
}
