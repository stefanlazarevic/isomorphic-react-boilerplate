import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './ExternalLink.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/**
 * Since React Router uses 'Link' component to
 * navigate internal pages, we can use ExternalLink
 * for navigating outside of application.
 */
const ExternalLink = props => {
  const { children, text, href, target, rel, className, ...rest } = props;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={classnames(classes.link, className)}
      {...rest}
    >
      {text || children}
    </a>
  );
};

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

export default withStyles(classes)(ExternalLink);
