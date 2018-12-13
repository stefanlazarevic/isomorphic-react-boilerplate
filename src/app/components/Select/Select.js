import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Option from './components/Option/Option.styled';

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  open = () => {
    this.setState(() => {
      if (this.state.isOpen) {
        return;
      }

      if (this.props.onOpen) {
        this.props.onOpen();
      }

      return { isOpen: true };
    });
  };

  close = () => {
    this.setState(() => {
      if (!this.state.isOpen) {
        return;
      }

      if (this.props.onClose) {
        this.props.onClose();
      }

      return { isOpen: false };
    });
  };

  toggleOpen = () => {
    this.setState(() => {
      if (this.state.isOpen) {
        this.close();
      } else {
        this.open();
      }
    });
  };

  handleClickOutside = event => {
    if (this.root && !this.root.contains(event.target)) {
      this.close();
    }
  };

  handleListClick = event => {
    console.log(event.target.dataset.index);
  };

  render() {
    return (
      <div className={this.props.className} ref={root => (this.root = root)}>
        <button
          aria-disabled={this.props.disabled}
          aria-haspopup="true"
          role="button"
          aria-expanded={this.state.isOpen ? true : undefined}
          tabIndex={this.state.isOpen ? '-1' : '0'}
          onClick={this.toggleOpen}
          disabled={this.props.disabled}
        />
        {this.state.isOpen ? (
          <ul className="options" role="listbox" onClick={this.handleListClick}>
            <Option data-index="0" value="yes">
              Yes
            </Option>
            <Option data-index="1" value="no">
              No
            </Option>
          </ul>
        ) : null}
      </div>
    );
  }
}
