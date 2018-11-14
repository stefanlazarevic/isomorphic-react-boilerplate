import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Paragraph from './Paragraph';

const StyledParagraph = styled(Paragraph)`
  ${({ theme }) => `
    color: ${theme.text_secondary};
    font-size: ${theme.p.size};
    font-weight: ${theme.p.weight};
    margin-bottom: 2rem;
  `};
`;

export default hot(module)(StyledParagraph);
