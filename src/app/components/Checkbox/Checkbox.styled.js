import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Checkbox from './Checkbox';

const StyledCheckbox = styled(Checkbox)`
  input {
    display: none;
  }

  label {
    color: ${({ theme }) => theme.text_secondary};
    cursor: pointer;
    position: relative;
    font-size: 1rem;
    outline: 0;

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  label:hover,
  label:focus {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const SidedCheckboxStyle = styled(StyledCheckbox)`
  ${({ theme, textPosition }) => {
    if (textPosition === 'right') {
      return `
        input + label::after {
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: 1em;
          height: 1em;
          border: 1px solid ${theme.border_primary};
          background-color: ${theme.background_secondary};
          margin-left: 10px;
          border-radius: 4px;
        }

        input + label:focus::after {
          border-color: ${theme.border_focus};
        }

        input:checked + label::after {
          background-color: ${theme.success};
          border-color: ${theme.success};
        }

        input:checked + label::before {
          content: '';
          display: table;
          position: absolute;
          top: 6px
          right: 5px;
          border: 2px solid #ffffff;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg);
          width: 6px;
          height: 10px;
        }
      `;
    }

    return `
      input + label::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.border_primary};
        background-color: ${theme.background_secondary};
        margin-right: 10px;
        border-radius: 4px;
      }

      input + label:focus::before {
        border-color: ${theme.border_focus};
      }

      input:checked + label::before {
        background-color: ${theme.success};
        border-color: ${theme.success};
      }

      input:checked + label::after {
        content: '';
        display: table;
        position: absolute;
        top: 6px
        left: 5px;
        border: 2px solid #ffffff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg);
        width: 6px;
        height: 10px;
      }
    `;
  }};
`;

SidedCheckboxStyle.propTypes = {
  theme: PropTypes.object,
  textPosition: PropTypes.oneOf(['left', 'right']),
};

SidedCheckboxStyle.defaultProps = {
  textPosition: 'left',
};

export default hot(module)(SidedCheckboxStyle);
