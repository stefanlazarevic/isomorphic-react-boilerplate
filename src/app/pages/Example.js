import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { exampleAction } from '@app/actions/example';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

class Example extends Component {
  static propTypes = {
    exampleData: PropTypes.array,
    exampleAction: PropTypes.func,
  };
  static defaultProps = {
    exampleData: [],
  };

  componentDidMount() {
    if (!this.props.exampleData.length) {
      this.props.exampleAction();
    }
  }

  render = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {this.props.exampleData.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => {
  return { exampleData: state.example };
};

const mapDispatchToProps = { exampleAction };

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Example)
);
