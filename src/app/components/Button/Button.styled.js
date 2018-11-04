import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Button from './Button';

const StyledButton = styled(Button)`
  padding: 5px;
`;

export default hot(module)(StyledButton);
