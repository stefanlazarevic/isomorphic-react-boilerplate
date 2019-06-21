import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, ...props}) => React.createElement('div', props, children);

export default Container;
