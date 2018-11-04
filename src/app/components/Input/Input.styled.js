import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Input from './Input';

const StyledInput = styled(Input)`
  padding: 5px 10px;
`;

export default hot(module)(StyledInput);
