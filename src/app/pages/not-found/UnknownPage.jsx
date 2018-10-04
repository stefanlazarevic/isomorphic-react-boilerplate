import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/**
 * Import page styles.
 */
import './UnknownPage.scss';

import Heading from '../../components/core/heading/Heading';
import Paragraph from '../../components/core/paragraph/Paragraph';
import Section from '../../components/core/section/Section';

class UnknownPage extends Component {
  renderPageMeta() {
    return (
      <Helmet>
        <title>Page Title less than 55 characters</title>
      </Helmet>
    );
  }

  render() {
    return (
      <Section>
        {this.renderPageMeta()}
        <Heading align="center" weight="light">404 Not Found</Heading>
        <Paragraph align="center">
          You may be lost. Return back to <Link to="/">Home</Link>.
        </Paragraph>
      </Section>
    );
  }
}

export default UnknownPage;
