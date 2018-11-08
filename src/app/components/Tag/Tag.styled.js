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
  border: 1px solid;
  cursor: ${props => (props.clickable ? 'pointer' : 'auto')};
  color: ${props => props.labelColor || props.theme.text.primary};
  background-color: ${props => props.bgColor || props.theme.text.secondary};
  border-color: ${props => props.bgColor};

  &:not(:first-child):not(:last-child) {
    margin: 0 5px;
  }
`;

StyledTag.propTypes = {
  clickable: PropTypes.bool,
  labelColor: PropTypes.string,
  bgColor: PropTypes.string,
};

StyledTag.defaultProps = {
  clickable: false,
  bgColor: 'transparent',
  visible: true,
};

export default hot(module)(StyledTag);
