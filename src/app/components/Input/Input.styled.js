import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Input from './Input';

/**
 * Static Input Styling.
 */
const StyledInput = styled(Input)`
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.border_primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background_secondary};
  transition: border-color 0.2s ease-in;
  outline: 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.border_hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.border_focus};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

StyledInput.propTypes = {
  theme: PropTypes.object,
};

StyledInput.defaultProps = {};

export default hot(module)(StyledInput);
