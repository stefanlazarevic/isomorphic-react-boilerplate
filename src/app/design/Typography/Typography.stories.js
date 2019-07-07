import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';
import { text } from '@storybook/addon-knobs';

import { Typography } from '@components';
import TypographyMarkdown from './Typography.md';

storiesOf('Design|Guidelines', module).add(
  'Typography',
  storyPreview(TypographyMarkdown, () => {
    const content = text('Text', 'Brown fox jumps over the lazy dog.');

    return (
      <Fragment>
        <Typography component="h1">Heading 1</Typography>
        <Typography component="h2">Heading 2</Typography>
        <Typography component="h3">Heading 3</Typography>
        <Typography component="h4">Heading 4</Typography>
        <Typography component="h5">Heading 5</Typography>
        <Typography component="h6">Heading 6</Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultricies velit ullamcorper, fringilla justo quis, tincidunt purus.
          Nam vel consectetur odio. Morbi rhoncus cursus elementum. Nunc vitae
          aliquam lacus, ac blandit ligula.
        </Typography>
      </Fragment>
    );
  })
);
