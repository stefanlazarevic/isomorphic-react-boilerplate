import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Header from './Header';

const StyledHeader = styled(Header)`
  // Replace with your custom styles.
  background-color: #eee;
  color: #444;
  cursor: pointer;
  outline: 0;

  &:hover,
  &:focus {
    background-color: #ccc;
  }
`;

StyledHeader.displayName = 'Accordion.Header';

export default hot(module)(StyledHeader);
