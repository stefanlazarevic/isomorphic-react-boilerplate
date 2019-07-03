import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class Provider extends Component {
  static propTypes = {
    allowedMultipleOpened: PropTypes.bool.isRequired,

    children: PropTypes.node,
  };

  static defaultProps = {
    allowedMultipleOpened: false,

    children: PropTypes.node,
  };

  state = {
    openedPanelReference: null,
    allowedMultipleOpened: this.props.allowedMultipleOpened,
  };

  setOpenPanel = reference =>
    this.setState(() => ({ openedPanelReference: reference }));

  render() {
    return (
      <Context.Provider
        value={{
          openedPanelReference: this.state.openedPanelReference,
          setOpenPanel: this.setOpenPanel,
        }}
      >
        {this.props.children || null}
      </Context.Provider>
    );
  }
}

export class Consumer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <Context.Consumer>{this.props.children || null}</Context.Consumer>;
  }
}
