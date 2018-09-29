import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Icon.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Icon = props => {
  const { icon, className, ...rest } = props;

  return icon ? (
    <i
      aria-hidden="true"
      className={classnames(icon, classes[icon], className)}
      {...rest}
    />
  ) : null;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default withStyles(classes)(Icon);
