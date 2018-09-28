import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Icon.scss';

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { icon, className } = props;

    return icon ? (
      <i
        aria-hidden="true"
        className={classnames(icon, classes[icon], className)}
        {...props}
      />
    ) : null;
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
