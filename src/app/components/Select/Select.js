import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ChevronDown } from '@icons/Chevron';
import { XMark } from '@icons/Mark';

import Option from './components/Option/Option.styled';

class Select extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    value: '',
    placeholder: 'Select...',
    required: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      label: props.label,
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.eventClose);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.eventClose);
  }

  shouldComponentUpdate(previousProps, previousState) {
    return (
      previousState.value !== this.state.value ||
      previousState.open !== this.state.open ||
      previousProps.className !== this.props.className
    );
  }

  clear = event => {
    event.stopPropagation();
    this.setState(() => ({ value: '' }));
  };

  eventClose = event =>
    this.node && this.node.contains(event.target) ? null : this.close();

  close = () => this.setState(() => ({ open: false }));

  toggle = () =>
    this.setState(previousState => ({ open: !previousState.open }));

  select = (event, value, label) => {
    this.setState(() => ({ value, label }));
    this.close();
    this.props.onChange && this.props.onChange(value);
  };

  get value() {
    return this.state.value;
  }

  render = () => (
    <div className={this.props.className} ref={node => (this.node = node)}>
      <div
        data-input
        // onClick={this.toggle}
        role="combobox"
        tabIndex="0"
        aria-autocomplete="none"
        aria-expanded={this.state.open}
        aria-required={this.props.required}
        aria-activedescendant={this.state.value || 'default'}
        aria-owns="age-list"
      >
        {this.state.value ? (
          <Fragment>
            <span data-value>{this.state.label}</span>
            <span data-close onClick={this.clear}>
              <XMark size="20" />
            </span>
          </Fragment>
        ) : (
          <span data-placeholder>{this.props.placeholder}</span>
        )}
        <ChevronDown size="16" />
      </div>
      {/* {this.state.open ? ( */}
      <ul data-options role="listbox" id="age-list">
        {this.props.options.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            value={option.value}
            onClick={this.select}
          />
        ))}
      </ul>
      {/* ) : null} */}
    </div>
  );
}

export default Select;
