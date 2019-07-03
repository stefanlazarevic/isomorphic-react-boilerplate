import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, ...props }) =>
  React.createElement('p', props, children);

Paragraph.propTypes = {
  children: PropTypes.node,
};

Paragraph.defaultProps = {};

export default Paragraph;
