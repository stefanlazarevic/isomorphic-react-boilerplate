import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { exampleAction } from '@redux/actions/example';

class Example extends Component {
  static propTypes = {
    exampleData: PropTypes.array,
    exampleAction: PropTypes.func,
  };

  static defaultProps = {
    exampleData: [],
  };

  static serverPreloadData = () => exampleAction();

  componentDidMount() {
    if (!this.props.exampleData.length) {
      this.props.exampleAction();
    }

    ReactGA.event({
      category: 'Users',
      action: 'Loaded Users.',
    });
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
