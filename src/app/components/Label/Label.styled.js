import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Label from './Label';

const StyledLabel = styled(Label)`
  display: block;
  cursor: pointer;
`;

StyledLabel.propTypes = {
  theme: PropTypes.object,
};

StyledLabel.defaultProps = {};

export default hot(module)(StyledLabel);
