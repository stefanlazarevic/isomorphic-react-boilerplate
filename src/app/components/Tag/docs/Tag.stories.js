import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean, color } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Tag } from '@components';

import TagDocumentation from './Tag.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['Tag'] })
  .add(
    'Tag',
    storyPreview(TagDocumentation, () => {
      return (
        <Tag
          label={text('Label', 'Premium')}
          clickable={boolean('Clickable', false)}
          labelColor={color('Label color', '#444')}
        />
      );
    })
  );
