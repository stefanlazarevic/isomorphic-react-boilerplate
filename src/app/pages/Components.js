import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Alert } from '@components';

class Components extends Component {
  static propTypes = {
    theme: PropTypes.any,
  };
  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Alert />
      </Fragment>
    );
  }
}

export default hot(module)(Components);
