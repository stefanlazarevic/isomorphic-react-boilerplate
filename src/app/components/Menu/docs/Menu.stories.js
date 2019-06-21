import React from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';

import { Menu } from '@components';

import MenuDocumentation from './Menu.md';

storiesOf('Components|Data Display', module)
  .addParameters({ jest: ['Menu'] })
  .add(
    'Menu',
    storyPreview(MenuDocumentation, () => {
      return <Menu items={['Item', 'Item 2', 'Item 3']}></Menu>
    })
  );
