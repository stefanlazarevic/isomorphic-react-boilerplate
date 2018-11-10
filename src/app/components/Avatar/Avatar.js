import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    letter: PropTypes.string.isRequired,
    onError: PropTypes.func,
  };

  static defaultProps = {};

  state = { hasError: false };

  handleError = () => {
    this.setState(() => ({ hasError: true }));
  };

  componentDidUpdate(previousProps, previousState) {
    if (this.props.onError && previousState.hasError !== this.state.hasError) {
      this.props.onError();
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.src && !this.state.hasError ? (
          <img
            src={this.props.src}
            alt={this.props.alt}
            onError={this.handleError}
          />
        ) : null}
        {(!this.props.src || this.state.hasError) && this.props.letter ? (
          <span>{this.props.letter[0]}</span>
        ) : null}
      </div>
    );
  }
}
