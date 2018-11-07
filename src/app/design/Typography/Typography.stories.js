import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';
import { text } from '@storybook/addon-knobs';

import { Heading, Paragraph } from '@components';
import TypographyMarkdown from './Typography.md';

storiesOf('Design|Guidelines', module).add(
  'Typography',
  storyPreview(TypographyMarkdown, () => {
    const content = text('Text', 'Brown fox jumps over the lazy dog.');

    return (
      <Fragment>
        <Heading level={1} text={content} />
        <Heading level={2} text={content} />
        <Heading level={3} text={content} />
        <Heading level={4} text={content} />
        <Heading level={5} text={content} />
        <Heading level={6} text={content} />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultricies velit ullamcorper, fringilla justo quis, tincidunt purus.
          Nam vel consectetur odio. Morbi rhoncus cursus elementum. Nunc vitae
          aliquam lacus, ac blandit ligula.
        </Paragraph>
      </Fragment>
    );
  })
);
