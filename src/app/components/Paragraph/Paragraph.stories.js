import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import Paragraph from './Paragraph.styled';

import ParagraphDocumentation from './Paragraph.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['Paragraph'] })
  .add(
    'Paragraph',
    storyPreview(ParagraphDocumentation, () => {
      return <Paragraph>{text('Text', 'Hello World')}</Paragraph>;
    }),
    {
      knobs: {
        timestamps: true,
        escapeHTML: true,
      },
    }
  );
