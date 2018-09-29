import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './List.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const List = props => {
  const {
    children,
    items,
    className,
    unstilled,
    horizontal,
    align,
    type,
    ...rest
  } = props;

  const Tag = type;

  return (
    <Tag
      className={classnames(
        className,
        unstilled && classes.unstilled,
        horizontal && classes.horizontal,
        classes[align]
      )}
      {...rest}
    >
      {children ||
        items.map((item, index) => <li key={item.id || index}>{item}</li>)}
    </Tag>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  unstilled: PropTypes.bool,
  horizontal: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.oneOf(['ul', 'ol', 'dl'])
};

List.defaultProps = {
  items: [],
  align: 'left',
  type: 'ul',
};

export default withStyles(classes)(List);
