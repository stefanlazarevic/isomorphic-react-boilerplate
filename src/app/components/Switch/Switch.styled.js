import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Switch from './Switch';

const StyledSwitch = styled(Switch)`
  input {
    display: none;
  }

  label {
    display: block;
    position: relative;
    height: 30px;
    width: 55px;
    border: 2px solid ${({ theme }) => theme.border_primary};
    border-radius: 15px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.background_secondary};
  }

  label:after {
    content: '';
    display: inline-block;
    position: absolute;
    height: 30px;
    border-radius: 50%;
    width: 30px;
    background-color: #c7cbdc;
    top: -2px;
    left: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    transition: all 0.2s linear;
  }

  input:checked + label {
    background-color: #7bc96f;
  }

  input:checked + label:after {
    left: unset;
    right: 0;
    background-color: white;
  }
`;

StyledSwitch.propTypes = {
  theme: PropTypes.object,
};

StyledSwitch.defaultProps = {};

export default hot(module)(StyledSwitch);
