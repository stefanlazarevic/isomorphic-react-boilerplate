import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from './Select';

const StyledSelect = styled(Select)`
  display: block;
  position: relative;

  & > button {
    display: block;
    width: 100%;
    cursor: pointer;
    position: relative;
    height: 35px;
    line-height: 2;
    border: 1px solid ${({ theme }) => theme.border_primary};
    outline: 0;
    border-radius: 4px;
    box-shadow: none;
    padding: 0 40px 0 10px;
    transition: border-color 0.2s linear;
    background-color: ${({ theme }) => theme.background_secondary};
    text-align: left;
    font-size: 1rem;

    &:hover {
      border-color: ${({ theme }) => theme.border_hover};
    }

    &:focus {
      border-color: ${({ theme }) => theme.border_focus};
    }
  }

  & > .options {
    display: block;
    position: absolute;
    top: 110%;
    width: 100%;
    max-height: 240px;
    background-color: ${({ theme }) => theme.background_tertiary};
    border: 1px solid ${({ theme }) => theme.border_primary};
    border-radius: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

StyledSelect.propTypes = {
  theme: PropTypes.object,
};

StyledSelect.defaultProps = {};

export default StyledSelect;
