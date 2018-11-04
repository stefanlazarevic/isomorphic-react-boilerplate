import styled from 'styled-components';
import { hot } from 'react-hot-loader';
// import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const StyledCheckbox = styled(Checkbox)`
  & input {
    visibility: hidden;
  }

  & label {
    cursor: pointer;
    vertical-align: middle;
    position: relative;

    span {
      vertical-align: middle;
    }

    &:before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
      border: 1px solid gray;
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  & input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    left: 1px;
    top: 13px;
    background: #333;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 #333, 4px 0 0 #333, 4px -2px 0 #333, 4px -4px 0 #333,
      4px -6px 0 #333, 4px -8px 0 #333;
    transform: rotate(45deg);
  }
`;

StyledCheckbox.propTypes = {};
StyledCheckbox.defaultProps = {};

export default hot(module)(StyledCheckbox);
