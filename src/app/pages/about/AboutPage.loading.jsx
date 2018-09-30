/**
 * React required imports.
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextLine from '../../components/core/textLine/TextLine';
import Section from '../../components/core/section/Section';

const AboutPageLoading = props => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return (
      <Section>
        <TextLine width={440} align="center" textLike="h1"/>
        <TextLine width={170} height={16} align="center"/>
        <TextLine width={70} height={16} align="center"/>
      </Section>
    );
  } else {
    return null;
  }
};

AboutPageLoading.propTypes = {
  error: PropTypes.object,
};

export default AboutPageLoading;
