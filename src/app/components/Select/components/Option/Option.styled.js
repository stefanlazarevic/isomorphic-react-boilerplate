import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Option from './Option';

const StyledOption = styled(Option)`
  display: block;
  color: ${({ theme }) => theme.text_secondary};
  padding: 10px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.background_secondary};
  }
`;

StyledOption.propTypes = {
  theme: PropTypes.object,
};

StyledOption.defaultProps = {};

export default hot(module)(StyledOption);
