import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, ...props }) => <p {...props}>{children}</p>;

Paragraph.propTypes = {
  children: PropTypes.node,
};

Paragraph.defaultProps = {};

export default Paragraph;
