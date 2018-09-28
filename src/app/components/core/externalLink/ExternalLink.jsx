import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ExternalLink.css';

/**
 * Since React Router uses 'Link' component to
 * navigate internal pages, we can use ExternalLink
 * for navigating outside of application.
 */
class ExternalLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { text, href, target, rel, className } = props;

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classnames(className)}
        {...props}
      >
        {text || props.children}
      </a>
    );
  }
}

ExternalLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self']),
  rel: PropTypes.oneOf(['noopener', 'noreferrer'])
};

ExternalLink.defaultProps = {
  target: '_blank',
  rel: 'noopener'
};

export default ExternalLink;
