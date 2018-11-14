import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Breadcrumb from './Breadcrumb';

const StyledBreadcrumb = styled(Breadcrumb)`
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }) => theme.link};

    &:hover {
      color: ${({ theme }) => theme.link_active};
    }
  }

  & > span:last-child a {
    color: ${({ theme }) => theme.text_secondary};
  }

  & > span:after {
    content: '/';
    color: ${({ theme }) => theme.border_dark};
    display: inline-block;
    margin: 0 5px;
  }
`;

StyledBreadcrumb.propTypes = {};

StyledBreadcrumb.defaultProps = {};

export default hot(module)(StyledBreadcrumb);
