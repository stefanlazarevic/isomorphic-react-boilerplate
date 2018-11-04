import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Badge from './Badge';

const StyledBadge = styled(Badge)`
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 13px;
  text-decoration: uppercase;
  font-size: 0.85rem;
  line-height: 1rem;
`;

StyledBadge.propTypes = {
  fill: PropTypes.bool,
};

StyledBadge.defaultprops = {};

export default hot(module)(StyledBadge);
