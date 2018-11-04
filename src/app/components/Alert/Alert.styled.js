import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Alert from './Alert';

const StyledAlert = styled(Alert)`
  ${({ theme }) => `
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: ${theme.color.alert.background};
    color: #fff;
  `};
`;

export default hot(module)(StyledAlert);
