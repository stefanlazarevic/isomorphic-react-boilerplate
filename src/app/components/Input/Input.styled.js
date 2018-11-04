import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Input from './Input';

const StyledInput = styled(Input)`
  border: 1px solid;
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.25em 0.8em;
`;

StyledInput.propTypes = {};

StyledInput.defaultProps = {};

export default hot(module)(StyledInput);
