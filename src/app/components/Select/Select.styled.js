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

  // display: block;
  // position: relative;
  // cursor: pointer;

  // & > [data-input] {
  //   position: relative;
  //   width: 100%;
  //   height: 35px;
  //   border: 1px solid transparent;
  //   border-radius: 4px;
  //   padding: 0 40px 0 10px;
  //   outline: none;
  //   margin-bottom: 35px;
  //   transition: border-color 0.2s linear;
  //   line-height: 2;
  //   background-color: ${({ theme }) => theme.background_secondary};
  //   border-color: ${({ theme }) => theme.border_primary};

  //   &:hover {
  //     border-color: ${({ theme }) => theme.border_hover};
  //   }

  //   &:focus {
  //     border-color: ${({ theme }) => theme.border_focus};
  //   }

  //   & > [data-value] {
  //     color: ${({ theme }) => theme.text_primary};
  //   }

  //   & > [data-placeholder] {
  //     color: ${({ theme }) => theme.text_secondary};
  //   }

  //   & > [data-close] {
  //     position: absolute;
  //     right: 25px;
  //     top: 0;
  //     padding-top: 5px;
  //     height: 35px;
  //     stroke: ${({ theme }) => theme.text_primary};
  //   }

  //   & > svg {
  //     position: absolute;
  //     right: 5px;
  //     top: 0;
  //     height: 35px;
  //     stroke: ${({ theme }) => theme.text_primary};
  //   }
  // }

  // & > [data-options] {
  //   display: block;
  //   padding: 0;
  //   margin: 0;
  //   position: absolute;
  //   width: 100%;
  //   top: 120%;
  //   z-index: 3;
  //   background-color: ${({ theme }) => theme.background_tertiary};
  //   border-radius: 4px;
  //   overflow-y: auto;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  // }
`;

StyledSelect.propTypes = {
  theme: PropTypes.object,
};

StyledSelect.defaultProps = {};

export default StyledSelect;
