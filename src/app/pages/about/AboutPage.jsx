/**
 * React required imports.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { pageview } from 'react-ga';

/**
 * Import page styles.
 */
import styles from './AboutPage.scss';

import Heading from '../../components/core/heading/Heading';
import Paragraph from '../../components/core/paragraph/Paragraph';
import Section from '../../components/core/section/Section';

class AboutPage extends Component {
  renderPageMeta() {
    return (
      <Helmet>
        <title>Page Title less than 55 characters</title>
        <meta name="description" content="Description of the page less than 150 characters" />
        <meta name="keywords" content="react, demo, keywords" />
      </Helmet>
    );
  }

  componentDidMount() {
    pageview('/about');
  }

  render() {
    return (
      <Section>
        {this.renderPageMeta()}
        <Heading align="center" weight="light">This is an About page</Heading>
        <Paragraph align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam, aliquid molestiae sit quae aspernatur quibusdam? Aliquam quibusdam iste, debitis magnam atque asperiores praesentium dolorem ab possimus cupiditate recusandae optio.
          Eligendi beatae, laborum incidunt voluptas, fugiat officiis, natus suscipit eveniet enim impedit expedita! Eligendi rerum debitis accusamus unde nostrum asperiores aut quia eaque cupiditate? Impedit non dicta maiores ipsum atque?
          Expedita obcaecati fugiat voluptas, officia similique quia et odit labore ab consectetur vero earum porro itaque pariatur tenetur nostrum laborum in doloremque laudantium. Optio modi aliquid, totam atque quis pariatur.
          <br/>
          <Link to="/">Back to Index</Link>
        </Paragraph>
      </Section>
    );
  }
}

/**
 * Initialize required actions to load data before rendering on server.
 */
AboutPage.serverFetchInitialData = [];

export default AboutPage;
