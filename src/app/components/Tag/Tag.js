import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    closable: PropTypes.bool,
    clickable: PropTypes.bool,
    checked: PropTypes.bool,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    visible: true,
    checked: true,
    closable: false,
    clickable: false,
  };

  state = {
    visible: this.props.visible,
    checked: this.props.checked,
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousState.visible !== this.state.visible && this.props.onClose) {
      this.props.onClose();
    }

    if (previousState.checked !== this.state.checked && this.props.onChange) {
      this.props.onChange(this.state.checked);
    }
  }

  close = () =>
    this.props.closable && this.setState(() => ({ visible: false }));

  toggleCheck = () =>
    this.props.clickable &&
    this.setState(previousState => ({ checked: !previousState.checked }));

  render = () => {
    return this.state.visible ? (
      <span
        className={this.props.className}
        data-checked={this.state.checked.toString()}
        onClick={this.toggleCheck}
      >
        {this.props.children || this.props.text}
      </span>
    ) : null;
  };
}

export default Tag;
