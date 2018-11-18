import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Breadcrumb from './Breadcrumb';

const StyledBreadcrumb = styled(Breadcrumb)`
  display: inline-block;
  list-style: none;
  padding-left: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.link};

    &:hover {
      color: ${({ theme }) => theme.link_active};
    }
  }

  & > li {
    display: inline-block;
  }

  & > li:last-child a {
    color: ${({ theme }) => theme.text_secondary};
  }

  & > li:after {
    content: '/';
    color: ${({ theme }) => theme.border_dark};
    display: inline-block;
    margin: 0 5px;
  }
`;

StyledBreadcrumb.propTypes = {};

StyledBreadcrumb.defaultProps = {};

export default hot(module)(StyledBreadcrumb);
