import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueID from '@util/unique';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    checked: false,
    label: '',
    onChange: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this._id = uniqueID();
  }

  toggle = () =>
    this.setState(previousState => ({ checked: !previousState.checked }));

  render = () => (
    <div {...this.props}>
      <input
        id={this._id}
        type="checkbox"
        checked={this.state.checked}
        onChange={() =>
          this.toggle() || this.props.onChange(this.state.checked)
        }
      />
      <label htmlFor={this._id}>
        <span>{this.props.label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
