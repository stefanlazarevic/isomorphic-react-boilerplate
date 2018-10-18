import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { exampleAction } from '@app/actions/example';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

class Example extends Component {
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

Example.propTypes = {
  exampleData: PropTypes.array,
  exampleAction: PropTypes.func,
};

Example.defaultProps = {
  exampleData: [],
};

const mapStateToProps = state => {
  return { exampleData: state.example };
};

export default hot(module)(
  connect(
    mapStateToProps,
    { exampleAction }
  )(Example)
);
