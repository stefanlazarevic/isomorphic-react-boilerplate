import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Container from './Container';


styled(({ completed, ...rest }) => <Textarea {...rest} />)`
color: ${({ completed }) => completed ? '#ccc' : '#fff'};
`;

const StyledContainer = styled(({ fluid, ...props }) => <Container {...props} />)`
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ fluid }) => {
    if (!fluid) {
      return `
        @media (min-width: 576px) {}

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) {
          max-width: 750px;
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) {
          max-width: 970px;
        }

        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1200px) {
          max-width: 1170px;
        }
      `;
    }
  }}
`;

StyledContainer.propTypes = {
  fluid: PropTypes.bool.isRequired,
};

StyledContainer.defaultProps = {
  fluid: false
};

export default hot(module)(StyledContainer);
