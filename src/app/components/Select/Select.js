import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Item } from '@components';
import SelectLabel from './components/Label/LabelStyled.styled';
import OptionWrapper from './components/OptionWrapper/OptionWrapper.styled';

export default class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    isOpen: false,
    disabled: false,
    options: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleKeyboardInput = event => {
    event.preventDefault();
    const { which } = event;

    if (which === 32) {
      if (this.OptionWrapper.isOpen()) {
        this.OptionWrapper.close();
      } else {
        this.OptionWrapper.open();
      }
    }

    if (which === 40) {
      if (!this.OptionWrapper.isOpen()) {
        this.OptionWrapper.open();
      }
    }
    if (which === 38) {
      if (this.OptionWrapper.isOpen()) {
        this.OptionWrapper.close();
      }
    }
  };

  handleClickEvent = () => {
    if (this.OptionWrapper.isOpen()) {
      this.OptionWrapper.close();
    } else {
      this.OptionWrapper.open();
    }
  };

  handleOptionSelect = value => {
    this.SelectLabel.setValue(value);
    this.OptionWrapper.close();
  };

  handleClickOutside = event => {
    if (this.root && !this.root.contains(event.target)) {
      this.OptionWrapper.close();
    }
  };

  render() {
    return (
      <div className={this.props.className} ref={root => (this.root = root)}>
        <div
          tabIndex="0"
          onKeyDown={this.handleKeyboardInput}
          onClick={this.handleClickEvent}
        >
          <SelectLabel
            innerRef={node => (this.SelectLabel = node)}
            placeholder={this.props.placeholder}
          />
        </div>
        <List static={false}>
          {
            this.props.options.map(option => <Item disabled={option.disabled}>{option.label}</Item>)
          }
        </List>
      </div>
    );
  }
}
