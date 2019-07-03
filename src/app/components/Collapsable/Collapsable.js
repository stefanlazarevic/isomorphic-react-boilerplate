import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { not } from '@util/helpers';

export default class Collapsable extends Component {
  static displayName = 'Collapsable';

  static propTypes = {
    expanded: PropTypes.bool.isRequired,
    beforeExpansion: PropTypes.func,
    beforeCollapsing: PropTypes.func,
    afterExpansion: PropTypes.func,
    afterCollapsing: PropTypes.func,
  };

  static defaultProps = {
    expanded: false
  };

  state = {
    expanded: this.props.expanded,
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  collapse = () => this.setState(() => ({ expanded: false }));

  expand = () => this.setState(() => ({ expanded: true }));

  toggle = () => {
    if (this.state.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.expanded === nextState.expanded) {
      return false;
    }

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    /* From not expanded to expanded update. */
    if (not(this.state.expanded) && nextState.expanded && this.props.beforeExpansion) {
      this.props.beforeExpansion();
    }

    /* From expanded to not expanded update. */
    if (this.state.expanded && not(nextState.expanded) && this.props.beforeCollapsing) {
      this.props.beforeCollapsing();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    /* From not expanded to expanded state updated. */
    if (not(prevState.expanded) && this.state.expanded && this.props.afterExpansion) {
      this.props.afterExpansion();
    }

    /* From expanded to not expanded state updated. */
    if (prevState.expanded && not(this.state.expanded) && this.props.afterCollapsing) {
      this.props.afterCollapsing();
    }
  }

  render() {
    return (
      <div
        ref={this.node}
        className={this.props.className}
        style={{ maxHeight: this.state.expanded ? `${this.node.current.scrollHeight}px` : '0px'}}
        aria-expanded={this.state.expanded}
      >
        { React.Children.map(this.props.children, child => {
          if (!this.state.expanded) {
            const props = { ...child.props, tabIndex: '-1'}
            return React.cloneElement(child, props);
          }

          return child;
        }) }
      </div>
    );
  }
}
