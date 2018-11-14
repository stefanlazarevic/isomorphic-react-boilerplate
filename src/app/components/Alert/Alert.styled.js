import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Alert from './Alert';

const StyledAlert = styled(Alert)`
  position: relative;
  border: 1px solid;
  border-left: 6px solid;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 1rem;
  margin-bottom: 10px;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.background_light};

  ${props => `

    border-color: ${props.theme[props.type]};

    & > strong {
      display: ${props.inline ? 'inline' : 'block'};
      color: ${props.theme[props.type]};
      margin-right: 10px;
      margin-bottom: 3px;
    }

    & > span {
      color: ${props.theme.text_primary}
    }

    & > div {
      width: 0.9rem;
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      cursor: pointer;
      svg {
        fill: ${props.theme.text_primary}
      }
    }
  `};
`;

StyledAlert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  inline: PropTypes.bool,
};

StyledAlert.defaultProps = {
  type: 'info',
  inline: true,
};

export default hot(module)(StyledAlert);
