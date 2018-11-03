import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Heading from './Heading';

const StyledHeading = styled(Heading)`
  ${({ theme, level }) => `
    color: ${theme.color.text.primary};
    color: var(--text-primary);
    font-size: ${theme.typography.heading[level].size};
    font-weight: ${theme.typography.heading[level].weight};
  `}};
`;

StyledHeading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

StyledHeading.defaultProps = {
  level: 1,
};

export default hot(module)(StyledHeading);
