import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = { active: props.active };
  }

  static propTypes = {
    active: PropTypes.bool,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    children: PropTypes.node,
  };

  static defaultProps = {
    active: false,
    type: 'info',
  };

  show = () => this.setState(() => ({ active: true }));

  hide = () => this.setState(() => ({ active: false }));

  render() {
    const { active, children, ...rest } = this.props;

    return this.state.active ? (
      <div {...rest} active={active.toString()}>
        {children}
      </div>
    ) : null;
  }
}

export default Alert;
