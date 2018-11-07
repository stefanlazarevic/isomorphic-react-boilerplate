import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Heading from './Heading';

const StyledHeading = styled(Heading)`
  ${({ theme, level, uppercase }) => `
    color: ${theme.text.primary};
    font-size: ${theme[`h${level}`].size};
    text-transform: ${uppercase ? 'uppercase' : 'initial'}
  `};
`;

StyledHeading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  // uppercase: PropTypes.bool,
};

StyledHeading.defaultProps = {
  level: 1,
  // uppercase: false,
};

export default hot(module)(StyledHeading);
