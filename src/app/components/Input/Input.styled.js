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
    color: ${props => props.theme.text.primary};
    font-size: 1em;
  }

  input {
    font-size: 1em;
    width: 100%;
    height: 34px;
    background-color: ${props => props.theme.background.secondary};
    outline: 0;
    border: 1px solid;
    border-radius: 4px;
    padding: 0 15px;
    color: ${props => props.theme.text.primary};
    border-color: ${props => props.theme.border.default};

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.text.secondary};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${props => props.theme.text.secondary};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${props => props.theme.text.secondary};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):focus {
      border-color: ${props => props.theme.highlight.info};
    }
  }

  [data-group-table='true'] {
    display: flex;
    flex: 1;

    span {
      display: flex;
      align-items: center;
      padding: 0 5px;
      color: ${props => props.theme.text.secondary};
      background: ${props => props.theme.background.secondary};
      border: 1px solid ${props => props.theme.border.default};
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
