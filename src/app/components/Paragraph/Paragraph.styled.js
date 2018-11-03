import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Paragraph from './Paragraph';

const StyledParagraph = styled(Paragraph)`
  ${({ theme }) => `
    color: ${theme.color.text.secondary};
    color: var(--text-secondary);
    font-size: ${theme.typography.paragraph.size};
    font-weight: ${theme.typography.paragraph.weight};
    margin-bottom: 2rem;
  `};
`;

export default hot(module)(StyledParagraph);
