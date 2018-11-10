import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Avatar from './Avatar';

const StyledAvatar = styled(Avatar)`
  display: inline-block;
  position: relative;
  border-radius: ${props => (props.shape === 'circle' ? '50%' : '6px')};
  overflow: hidden;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.bgColor};
  border-color: transparent;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    display: block;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${props => props.size / 3}px;
    color: ${props => props.letterColor};
  }
`;

StyledAvatar.propTypes = {
  shape: PropTypes.oneOf(['circle', 'square']).isRequired,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  letterColor: PropTypes.string,
};

StyledAvatar.defaultProps = {
  shape: 'circle',
  size: 60,
  bgColor: '#efefef',
  letterColor: '#333',
};

export default hot(module)(StyledAvatar);
