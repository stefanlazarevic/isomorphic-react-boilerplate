import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../components/core/section/Section';
import TextLine from '../../components/core/textLine/TextLine';

const HomePageLoading = () => {
  return (
    <Section>
      <TextLine width={400} textLike="h1" align="center" />
      <TextLine width={500} textLike="p" align="center" />
    </Section>
  );
};

export default HomePageLoading;
