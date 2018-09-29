import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Heading.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Heading = props => {
  const {
    children,
    text,
    align,
    weight,
    level,
    showLevel,
    className,
    ...rest
  } = props;

  const Tag = level ? `h${level}` : 'h1';
  const styleTag = showLevel && `h${showLevel}`;

  return (
    <Tag className={classnames(classes[align], classes[styleTag || Tag], classes[weight], className)} {...rest}>
      {text || children}
    </Tag>
  );
};


Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  showLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf([
    'thin',
    'light',
    'regular',
    'semiBold',
    'bold',
    'extraBold'
  ]),
};

Heading.defaultProps = {
  level: 1,
  align: 'left',
  weight: 'regular',
};

export default withStyles(classes)(Heading);
