import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './TextLine.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const TextLine = props => {
  const { width, height, textLike, align, className, ...rest } = props;

  return (
    <div>
      <div
        style={{ width, ...{height: !textLike ? height : undefined} }}
        className={classnames(classes.line, classes[textLike], classes[align], className)}
        {...rest}
      ></div>
    </div>
  );
};

TextLine.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  textLike: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

TextLine.defaultProps = {
  width: 120,
  height: 16,
};

export default withStyles(classes)(TextLine);
