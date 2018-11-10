import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    closable: PropTypes.bool,
    clickable: PropTypes.bool,
    selected: PropTypes.bool,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    renderAs: PropTypes.string,
  };

  static defaultProps = {
    visible: true,
    selected: false,
    closable: false,
    clickable: false,
    renderAs: 'div',
  };

  state = {
    visible: this.props.visible,
    selected: this.props.selected,
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousState.visible !== this.state.visible && this.props.onClose) {
      this.props.onClose();
    }

    if (previousState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(this.state.selected);
    }
  }

  close = () =>
    this.props.closable && this.setState(() => ({ visible: false }));

  toggleCheck = () =>
    this.props.clickable &&
    this.setState(previousState => ({ selected: !previousState.selected }));

  render = () => {
    const CustomTagElement = this.props.renderAs;

    return this.state.visible ? (
      <CustomTagElement
        className={this.props.className}
        data-checked={this.state.selected.toString()}
      >
        <span onClick={this.toggleCheck}>
          {this.props.children || this.props.label}
        </span>
        {this.props.closable ? (
          <svg
            width="0.6em"
            height="0.6em"
            viewBox="0 0 24 24"
            onClick={this.close}
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        ) : null}
      </CustomTagElement>
    ) : null;
  };
}
