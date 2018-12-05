import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './components/Option/Option.styled';

const Placeholder = styled.span`
  color: ${({ theme }) => theme.text_secondary};
`;

const SelectedValue = styled.span`
  color: ${({ theme }) => theme.text_primary};
`;

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultLabel: PropTypes.string,
    placeholder: PropTypes.string,
    open: PropTypes.bool,
  };

  static defaultProps = {
    placeholder: 'Do you like cheese?',
    open: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultLabel,
      open: props.open,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickEvent = () => {
    this.setState(currentState => ({ open: !currentState.open }));
  };

  handleClickOutside = event => {
    if (this.selectDom && !this.selectDom.contains(event.target)) {
      this.setState(() => ({ open: false }));
    }
  };

  handleKeyDown = event => {
    if (event.keyCode !== event.keycode.TAB) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        ref={selectDom => (this.selectDom = selectDom)}
      >
        <button
          aria-haspopup="true"
          role="button"
          aria-controls="_001"
          aria-expanded={this.state.open ? true : undefined}
          tabIndex={this.state.open ? '-1' : '0'}
          onClick={this.handleClickEvent}
          onKeyDown={this.handleKeyDown}
        >
          <SelectedValue>{this.state.value}</SelectedValue>
          <Placeholder>{this.props.placeholder}</Placeholder>
        </button>
        {this.state.open ? (
          <ul id="_001" className="options" role="listbox">
            <Option label="Yes" value="yes" onClick={() => undefined} />
            <Option label="No" value="no" onClick={() => undefined} />
          </ul>
        ) : null}
      </div>
    );
  }
}
