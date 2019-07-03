import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Accordion from './Accordion';

const StyledAccordion = styled(Accordion)`
  display: block;
`;

export default hot(module)(StyledAccordion);
