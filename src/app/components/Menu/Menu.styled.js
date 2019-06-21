import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Menu from './Menu';

const StyledMenu = styled(Menu)`
  .menu__list {
    display: none;
  }

  .menu__list.open {
    display: block;
  }
`;

export default hot(module)(StyledMenu);
