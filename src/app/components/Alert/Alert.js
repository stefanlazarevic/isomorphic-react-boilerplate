import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: true };
  }

  static propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    title: PropTypes.string,
    message: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClose: PropTypes.func,
    autoclose: PropTypes.bool,
  };

  static defaultProps = {
    message: 'Information message goes here.',
    title: 'Information message:',
    onClose: () => null,
    type: 'info',
  };

  componentDidMount() {
    if (this.props.autoclose) {
      this.timeout = setTimeout(() => this.close(), 5000);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  close = () => {
    this.setState(() => ({ visible: false }));
    this.props.onClose();
  };

  render = () =>
    this.state.visible ? (
      <div className={this.props.className} type={this.props.type}>
        <strong>{this.props.title}</strong>
        <span>{this.props.children || this.props.message}</span>
        <div onClick={this.close}>
          <svg width="0.9rem" height="0.9rem" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
          </svg>
        </div>
      </div>
    ) : null;
}

export default Alert;
