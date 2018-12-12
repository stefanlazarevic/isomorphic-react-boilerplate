import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Checkbox from './Checkbox';

const innerCheckboxStyle = theme => `
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 1em;
  height: 1em;
  border: 1px solid ${theme.border_primary};
  background-color: ${theme.background_secondary};
  margin-right: 10px;
  border-radius: 4px;
`;

const innerCheckboxCheckedStyle = () => `
  content: '';
  display: none;
  position: absolute;
  top: 3px;
  transform: rotate(45deg);
  display: table;
  width: 6px;
  height: 10px;
  border: 2px solid white;
  border-top: 0;
  border-left: 0;
`;

const StyledCheckbox = styled(Checkbox)`
  input {
    display: none;
  }

  label {
    color: ${({ theme }) => theme.text_secondary};
    cursor: pointer;
    position: relative;
    font-size: 1rem;
  }

  ${({ textPosition, theme }) => {
    if (textPosition === 'right') {
      return `
        label:after {
          ${innerCheckboxStyle(theme)}
        }

        label:before {
          ${innerCheckboxCheckedStyle(theme)}
          right: 5px;
        }

        input:checked + label:after {
          background-color: ${({ theme }) => theme.success};
          border-color: ${({ theme }) => theme.success};
        }

        input:checked + label:before {
          display: block;
        }
      `;
    } else {
      return `
        label:before {
          ${innerCheckboxStyle(theme)}
        }

        label:after {
          ${innerCheckboxCheckedStyle(theme)}
          left: 5px;
        }

        input:checked + label:before {
          background-color: ${({ theme }) => theme.success};
          border-color: ${({ theme }) => theme.success};
        }

        input:checked + label:after {
          display: block;
        }
      `;
    }
  }};
`;

StyledCheckbox.propTypes = {
  theme: PropTypes.object,
  textPosition: PropTypes.oneOf(['left', 'right']),
};

StyledCheckbox.defaultProps = {
  textPosition: 'left',
};

export default hot(module)(StyledCheckbox);
