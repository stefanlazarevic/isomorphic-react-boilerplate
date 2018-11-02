import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

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
    const { active, children, type, ...rest } = this.props;

    return this.state.active ? (
      <div {...rest} active={active.toString()} type={type}>
        {children}
      </div>
    ) : null;
  }
}

export default hot(module)(Alert);
