import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import InputGroup from './InputGroup';

const StyledInputGroup = styled(InputGroup)`
  display: flex;
  width: 100%;
  align-items: stretch;

  & > input:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > input:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export default hot(module)(StyledInputGroup);
