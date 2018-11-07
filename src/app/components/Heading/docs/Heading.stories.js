import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { specs } from 'storybook-addon-specifications';
import storyPreview from '@util/storyPreview';

import Heading from '../Heading.styled';
import tests from '../tests/Heading.test';

import HeadingDocumentation from './Heading.md';

storiesOf('Components|Data Display', module).add(
  'Heading',
  storyPreview(HeadingDocumentation, () => {
    specs(() => tests);
    return (
      <Heading
        level={select('Level', [1, 2, 3, 4, 5, 6], 1)}
        text={text('Text', 'Heading 1')}
        uppercase={boolean('Uppercase', false)}
      />
    );
  }),
  {
    knobs: {
      timestamps: true,
      escapeHTML: true,
    },
    notes: {
      markdown: `> The six heading elements, H1 through H6, denote section headings. Although the order and occurrence of headings is not constrained by the HTML DTD, documents should not skip levels (for example, from H1 to H3), as converting such documents to other representations is often problematic.
         >
         > &mdash; <cite> W3C</cite>`,
    },
  }
);
