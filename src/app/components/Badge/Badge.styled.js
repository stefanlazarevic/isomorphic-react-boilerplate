import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Badge from './Badge';

const StyledBadge = styled(Badge)`
  display: inline-block;
  border: 2px solid currentColor;
  border-radius: 13px;
  text-transform: uppercase;
  font-size: 0.85rem;
  line-height: 1rem;
  padding: 0.25rem 1rem;
  vertical-align: middle;

  &:not(:first-child):not(:last-child) {
    margin: 0 5px;
  }

  color: ${props => props.color};
  background: ${props => (props.fill ? props.background : 'transparent')};
`;

StyledBadge.propTypes = {
  fill: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
};

StyledBadge.defaultProps = {
  fill: false,
  color: '#586069',
  background: '#e6ebf1',
};

export default hot(module)(StyledBadge);
