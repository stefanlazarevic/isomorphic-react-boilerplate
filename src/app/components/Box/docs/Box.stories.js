import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Box } from '@components';

import BoxDocumentation from './Box.md';

storiesOf('Components|Layout', module)
  .addParameters({ jest: ['Box'] })
  .add(
    'Box',
    storyPreview(BoxDocumentation, () => {
      return (
        <Box
          component={select(
            'Component',
            ['div', 'h1', 'h2', 'small', 'strong'],
            'div'
          )}
        >
          {text('Children', 'Hello World')}
        </Box>
      );
    })
  );
