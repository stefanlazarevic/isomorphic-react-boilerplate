import React from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';

import { List, Item } from '@components';

import ListDocumentation from './List.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['List'] })
  .add(
    'List',
    storyPreview(ListDocumentation, () => {
      return <List static={false}>
        <Item>Apple</Item>
        <Item>Graves</Item>
        <Item>Banana</Item>
        <Item>Strawberry</Item>
      </List>;
    })
  );
