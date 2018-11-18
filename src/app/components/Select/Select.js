import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    value: '',
    placeholder: 'Select...',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      open: true,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.close);
  }

  open = () => this.setState(() => ({ open: true }));

  close = () => this.setState(() => ({ open: false }));

  toggle = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState(state => ({ open: !state.open }));
  };

  select = (event, value) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState(() => ({ value }));
  };

  render = () => (
    <div className={this.props.className}>
      <div data-input onClick={this.toggle}>
        {this.state.value ? (
          <span data-value>{this.state.value}</span>
        ) : (
          <span data-placeholder>{this.props.placeholder}</span>
        )}
      </div>
      {this.state.open ? (
        <div data-options>
          <div
            data-option
            role="option"
            onClick={event => this.select(event, 'Option 1')}
          >
            Option 1
          </div>
          <div
            data-option
            role="option"
            onClick={event => this.select(event, 'Option 2')}
          >
            Option 2
          </div>
          <div
            data-option
            role="option"
            onClick={event => this.select(event, 'Option 3')}
          >
            Option 3
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Select;
