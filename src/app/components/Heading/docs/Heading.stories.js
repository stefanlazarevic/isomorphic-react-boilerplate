import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Heading } from '@components';

import HeadingDocumentation from './Heading.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['Heading'] })
  .add(
    'Heading',
    storyPreview(HeadingDocumentation, () => {
      return (
        <Heading
          level={select('Level', [1, 2, 3, 4, 5, 6], 1)}
          text={text('Text', 'Heading 1')}
          uppercase={boolean('Uppercase', false)}
        />
      );
    }),
    {
      notes: {
        markdown: `> The six heading elements, H1 through H6, denote section headings. Although the order and occurrence of headings is not constrained by the HTML DTD, documents should not skip levels (for example, from H1 to H3), as converting such documents to other representations is often problematic.
         >
         > &mdash; <cite> W3C</cite>`,
      },
    }
  );
