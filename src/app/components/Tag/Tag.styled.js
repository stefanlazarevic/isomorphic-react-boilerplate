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
  cursor: ${props => (props.clickable ? 'pointer' : 'auto')};
  color: ${({ labelColor, theme }) => labelColor || theme.text_primary};
  background-color: ${props => props.bgColor};
  border-color: ${props => props.bgColor};

  &:not(:first-child):not(:last-child) {
    margin: 0 5px;
  }

  & > svg {
    margin-left: 0.5em;
    cursor: pointer;
    fill: ${props => props.labelColor};
  }

  &[data-checked='true'] {
    color: ${({ activeLabelColor, theme }) =>
      activeLabelColor || theme.text_primary};
    background-color: ${({ activeBgColor, theme }) =>
      activeBgColor || theme.text_secondary};
    border-color: ${({ activeBgColor, theme }) =>
      activeBgColor || theme.text_secondary};

    svg {
      fill: ${({ activeLabelColor, theme }) =>
        activeLabelColor || theme.text_primary};
    }
  }
`;

StyledTag.propTypes = {
  clickable: PropTypes.bool,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,
  activeBgColor: PropTypes.string,
  bgColor: PropTypes.string,
};

StyledTag.defaultProps = {
  clickable: false,
  bgColor: 'transparent',
  visible: true,
};

export default hot(module)(StyledTag);
