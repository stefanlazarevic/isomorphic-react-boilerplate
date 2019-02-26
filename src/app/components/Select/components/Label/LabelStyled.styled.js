import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Label from './Label';

const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  font-size: 1rem;

  &[data-placeholder='true'] {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

StyledLabel.propTypes = {
  theme: PropTypes.object,
};

StyledLabel.defaultProps = {};

export default hot(module)(StyledLabel);
