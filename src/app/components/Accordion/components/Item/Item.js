import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  static displayName = 'Accordion.Item';

  static propTypes = {
    expanded: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    expanded: false,
  };

  state = {
    expanded: this.props.expanded,
  }

  expand = () => this.setState(() => ({ expanded: true }));

  collapse = () => this.setState(() => ({ expanded: false }));

  toggleExpansion = () => {
    if (this.state.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {
          React.Children.map(this.props.children, child => {
            if (child.type.target && child.type.target.displayName === 'Accordion.Header') {
              const props = {
                expanded: this.state.expanded,
                onClick: () => this.toggleExpansion(),
                ...child.props,
              };

              return React.cloneElement(child, props);
            }

            if (child.type.displayName === 'Accordion.Body') {
              const props = { expanded: this.state.expanded, ...child.props };

              return React.cloneElement(child, props);
            }

            return null;
          })
        }
      </div>
    );
  }
}
