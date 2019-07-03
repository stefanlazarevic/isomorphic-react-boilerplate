import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class Provider extends Component {
  static propTypes = {
    allowedMultipleOpened: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    allowedMultipleOpened: false,
  }

  state = {
    openedPanelReference: null,
    allowedMultipleOpened: this.props.allowedMultipleOpened,
  }

  setOpenPanel = reference => this.setState(() => ({ openedPanelReference: reference }));

  render() {
    return (
      <Context.Provider value={{
        openedPanelReference: this.state.openedPanelReference,
        setOpenPanel: this.setOpenPanel,
      }}>
        {this.props.children || null}
      </Context.Provider>
    );
  }
}

export class Consumer extends Component {
  render() {
    return (
      <Context.Consumer>
        {this.props.children || null}
      </Context.Consumer>
    );
  }
}
