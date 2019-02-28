import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Option from './Option';

const StyledOption = styled(Option)`
  display: block;
  color: ${({ theme }) => theme.text_secondary};
  padding: 10px;
  outline: 0;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.background_primary};
  cursor: pointer;

  &[aria-disabled='false']:hover,
  &[aria-disabled='false']:focus {
    background-color: ${({ theme }) => theme.background_tertiary};
  }

  &[aria-disabled='false'].selected,
  &[aria-disabled='false'].selected:hover {
    background-color: ${({ theme }) => theme.background_secondary};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;

StyledOption.propTypes = {
  theme: PropTypes.object,
};

StyledOption.defaultProps = {};

export default hot(module)(StyledOption);
