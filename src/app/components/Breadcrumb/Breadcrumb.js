import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const BreadcrumbItem = ({ to, title, ...rest }) => {
  return (
    <li>
      <Link {...rest} to={to}>
        {title}
      </Link>
    </li>
  );
};

BreadcrumbItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

class Breadcrumb extends Component {
  static propTypes = {
    className: PropTypes.string,
    mask: PropTypes.string.isRequired,
    maskData: PropTypes.object,
    location: PropTypes.object,
    path: PropTypes.string,
  };

  static defaultProps = {
    mask: '/',
    maskData: {},
  };

  constructor(props) {
    super(props);
  }

  generateBreadcrumb = () => {
    const URL = this.props.path || this.props.location.pathname;
    const segments = [''].concat(URL.split('/').filter(Boolean));
    const MASK_URL = this.props.mask;
    const maskSegments = ['Home'].concat(MASK_URL.split('/').filter(Boolean));

    return segments.map((field, index, original) => {
      const path = original.slice(0, index + 1).join('/');
      const defaultTitle = field.replace(/[-_]/g, ' ');

      const maskPart = maskSegments[index];
      const maskTitle =
        maskPart &&
        maskPart.replace(/:(.*)/, (match, key) => {
          const maskProperty = this.props.maskData[key];
          if (typeof maskProperty === 'string') {
            return maskProperty;
          } else if (typeof maskProperty === 'function') {
            return maskProperty(key, field);
          } else {
            return '';
          }
        });

      const title = maskTitle || defaultTitle;

      return <BreadcrumbItem key={index} to={path} title={title} />;
    });
  };

  render() {
    return (
      <ol aria-label="breadcrumb" className={this.props.className}>
        {this.generateBreadcrumb()}
      </ol>
    );
  }
}

export default withRouter(Breadcrumb);
