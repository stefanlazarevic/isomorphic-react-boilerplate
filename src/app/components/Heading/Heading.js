import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children, text, ...props }) => React.createElement(`h${level}`, props, children || text);

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"]).isRequired,
  children: PropTypes.node,
  text: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
