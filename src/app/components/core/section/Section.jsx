import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Section.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Section = props => {
  const { children, className, align, style, background, ...rest } = props;

  return (
    <section
      style={Object.assign({...style}, {background})}
      className={classnames(classes.section, className, classes[align])}
      {...rest}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  style: PropTypes.object,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  background: PropTypes.string,
};

Section.defaultProps = {
  style: {}
};

export default withStyles(classes)(Section);
