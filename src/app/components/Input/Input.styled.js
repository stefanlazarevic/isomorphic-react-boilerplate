import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Input from './Input';

const StyledInput = styled(Input)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;

  label {
    display: block;
    width: ${props => (props.inline ? 'auto' : '100%')};
    margin-bottom: ${props => (props.inline ? '0' : '10')}px;
    margin-right: ${props => (props.inline ? '10' : '0')}px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 1em;
  }

  input {
    font-size: 1em;
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.background_light};
    outline: 0;
    border: 1px solid;
    border-radius: 4px;
    padding: 0 15px;
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.border_light};

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.text_secondary};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.text_secondary};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ theme }) => theme.text_secondary};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${({ theme }) => theme.border_dark};
    }

    &:not(:disabled):focus {
      border-color: ${({ theme }) => theme.border_dark};
    }
  }

  [data-group-table='true'] {
    display: flex;
    flex: 1;

    span {
      display: flex;
      align-items: center;
      padding: 0 5px;
      height: 40px;
      color: ${({ theme }) => theme.text_primary};
      background: ${({ theme }) => theme.background_light};
      border: 1px solid ${({ theme }) => theme.border_light};
    }

    span:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: 0;
    }

    span:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border-left: 0;
    }

    & > input:not(:first-child):not(:last-child) {
      border-radius: 0;
    }

    & > input:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    & > input:last-child:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

StyledInput.propTypes = {
  inline: PropTypes.bool,
};

StyledInput.defaultProps = {
  inline: false,
};

export default hot(module)(StyledInput);
