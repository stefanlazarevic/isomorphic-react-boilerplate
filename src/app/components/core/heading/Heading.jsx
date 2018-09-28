import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './Heading.scss';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { text, align, level, className } = props;

    const Tag = level ? `h${level}` : 'h1';

    return (
      <Tag className={classnames(classes[align], classes[Tag], className)} {...props}>
        {text || props.children}
      </Tag>
    );
  }
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  align: PropTypes.oneOf(['left', 'center', 'right'])
};

Heading.defaultProps = {
  level: 1,
  align: 'left'
};

export default Heading;
