import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from './Select';

const StyledSelect = styled(Select)`
  display: block;
  position: relative;
  cursor: pointer;

  & > [data-input] {
    position: relative;
    width: 100%;
    height: 35px;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0 40px 0 10px;
    outline: none;
    margin-bottom: 35px;
    transition: border-color 0.2s linear;
    line-height: 2;
    background-color: ${({ theme }) => theme.background_light};

    & > [data-value] {
      color: ${({ theme }) => theme.text_primary};
    }

    & > [data-placeholder] {
      color: ${({ theme }) => theme.border_light};
    }

    & > [data-close] {
      position: absolute;
      right: 25px;
      top: 3px;
      stroke: ${({ theme }) => theme.text_primary};
    }

    & > svg {
      position: absolute;
      right: 5px;
      top: 10px;
      stroke: ${({ theme }) => theme.text_primary};
    }
  }

  & > [data-options] {
    display: block;
    position: absolute;
    width: 100%;
    top: 120%;
    z-index: 3;
    background-color: ${({ theme }) => theme.background_light};
    border-radius: 4px;
    overflow-y: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);

    & > [data-option] {
      color: ${({ theme }) => theme.text_secondary};
      padding: 10px;

      &:hover {
        background-color: ${({ theme }) => theme.background};
      }
    }
  }
`;

StyledSelect.propTypes = {};

StyledSelect.defaultProps = {};

export default StyledSelect;
