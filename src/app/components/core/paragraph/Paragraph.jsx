import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from'./Paragraph.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Paragraph = props => {
  const { children, text, align, density, size, reverse, weight, className, ...rest } = props;

  const content = text
    ? reverse
      ? [...text].reverse().join('')
      : text
    : void 0;

  return (
    <p
      className={classnames(
        classes['wordBreak'],
        classes[align],
        classes[density],
        classes[size],
        classes[weight],
        classes[className]
      )}
      {...rest}
    >
      {content || children}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  density: PropTypes.oneOf(['default', 'comfortable', 'compact']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  weight: PropTypes.oneOf([
    'thin',
    'light',
    'regular',
    'semiBold',
    'bold',
    'extraBold'
  ]),
  reverse: PropTypes.bool
};

Paragraph.defaultProps = {
  align: 'left',
  density: 'default',
  size: 'medium',
  weight: 'regular'
};

export default withStyles(classes)(Paragraph);
