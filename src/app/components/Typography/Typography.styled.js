import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Typography = styled(({ component, ...props }) =>
  React.createElement(component, { ...props })
)`
  font-family: 'Nunito', sans-serif;
  font-weight: 300;

  ${props =>
    props.component === 'h1' &&
    css`
      font-size: 50px;
    `};
`;

Typography.propTypes = {
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'small',
  ]),
};

Typography.defaultProps = {
  component: 'p',
};

export default Typography;
