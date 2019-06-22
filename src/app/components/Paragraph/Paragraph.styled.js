import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Paragraph from './Paragraph';

const StyledParagraph = styled(Paragraph)`
  font-size: 12px;
  font-weight: 300;
  line-height: 1em;
`;

export default hot(module)(StyledParagraph);
