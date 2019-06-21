import React from 'react';
import PropTypes from 'prop-types';

const Box = props => React.createElement(props.component, props, props.children);

Box.propTypes = {
  component: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Box.defaultProps = {
  component: 'div',
};

export default Box;
