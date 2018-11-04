import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Label from './Label';

const StyledLabel = styled(Label)`
  cursor: pointer;
  display: ${({ display }) => display};
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.15em;
  color: ${({ theme }) => theme.color.text.secondary};
  margin: 0 0.5rem 1rem;

  &:first-child {
    margin-left: 0;
    margin-right: 0.5rem;
  }

  &:last-child {
    margin-left: 0.5rem;
    margin-right: 0;
  }
`;

StyledLabel.propTypes = {
  display: PropTypes.oneOf(['block', 'inline-block']),
};

StyledLabel.defaultProps = {
  display: 'inline-block',
};

export default hot(module)(StyledLabel);
