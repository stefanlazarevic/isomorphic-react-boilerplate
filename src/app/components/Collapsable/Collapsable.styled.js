import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Collapsable from './Collapsable';

const StyledCollapsable = styled(Collapsable)`
  // Place styles in here.

  // [DO NOT MOVE] -> Required styles.
  overflow: hidden;
  height: 100%;
  max-height: 0px;
  padding-top: 0;
  padding-bottom: 0;
  transition: max-height 0.2s ease-out;
`;

export default hot(module)(StyledCollapsable);
