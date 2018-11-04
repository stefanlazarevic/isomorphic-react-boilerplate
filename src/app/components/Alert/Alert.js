import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  static propTypes = {
    children: PropTypes.node,
    message: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    message: 'information message goes here.',
    title: 'Information message:',
    onClose: () => null,
  };

  render = () => (
    <div className={this.props.className}>
      <strong>{this.props.title}</strong>
      <span>{this.props.children || this.props.message}</span>
      <div onClick={() => this.props.onClose()}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMjAuMTg4bC04LjMxNS04LjIwOSA4LjItOC4yODItMy42OTctMy42OTctOC4yMTIgOC4zMTgtOC4zMS04LjIwMy0zLjY2NiAzLjY2NiA4LjMyMSA4LjI0LTguMjA2IDguMzEzIDMuNjY2IDMuNjY2IDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg==" />
      </div>
    </div>
  );
}

export default Alert;
