import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import OptionWrapper from './OptionWrapper';

const StyledOptionWrapper = styled(OptionWrapper)`
  position: absolute;
  top: 105%;
  left: 0;
  width: 100%;
  padding: 0;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.border_primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background_primary};
  max-height: 210px;
  overflow-y: scroll;

  &.opened {
    display: block;
  }

  &.closed {
    display: none;
  }
`;

StyledOptionWrapper.propTypes = {
  theme: PropTypes.object,
};

StyledOptionWrapper.defaultProps = {};

export default hot(module)(StyledOptionWrapper);
