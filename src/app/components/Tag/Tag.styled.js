import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Tag from './Tag';

const StyledTag = styled(Tag)`
  display: ${props => (props.visible ? 'inline-block' : 'none')};
  border-radius: 5px;
  font-size: 0.85rem;
  line-height: 1rem;
  padding: 0.25rem 0.5rem;
  vertical-align: middle;
  border: 1px solid transparent;
  cursor: pointer;

  &[data-checked='true'] {
    background: ${props => (props.fill ? props.background : 'transparent')};
    color: ${props => props.color};
    border-color: currentColor;
  }

  &:not(:first-child):not(:last-child) {
    margin: 0 5px;
  }
`;

StyledTag.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  checked: PropTypes.bool,
  color: PropTypes.string,
  fill: PropTypes.bool,
  background: PropTypes.string,
};

StyledTag.defaultProps = {
  visible: true,
  checked: true,
  closable: false,
  fill: false,
  color: 'rgba(0,0,0,.65)',
  background: '#f3f3f3',
};

export default hot(module)(StyledTag);
