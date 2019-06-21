import React from 'react';
import PropTypes from 'prop-types';

const Box = ({component, children, ...props}) => React.createElement(component, props, children);

Box.propTypes = {
  component: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Box.defaultProps = {
  component: 'div',
};

export default Box;
