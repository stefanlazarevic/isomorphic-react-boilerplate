import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import InputGroupAddon from './InputGroupAddon';

const StyledInputGroupAddon = styled(InputGroupAddon)`
  display: flex;
  background-color: ${({ theme }) => theme.background_secondary};
  align-items: stretch;
  line-height: 2rem;
  color: ${({ theme }) => theme.text_secondary};
  border-style: solid;
  border-width: 1px 0;
  border-color: ${({ theme }) => theme.border_primary};

  &[data-position='prepend'] {
    border-left-width: 1px;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  &[data-position='append'] {
    border-right-width: 1px;

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  & > * {
    padding: 0 5px;
  }
`;

StyledInputGroupAddon.propTypes = {
  theme: PropTypes.object,
};

StyledInputGroupAddon.defaultProps = {};

export default hot(module)(StyledInputGroupAddon);
