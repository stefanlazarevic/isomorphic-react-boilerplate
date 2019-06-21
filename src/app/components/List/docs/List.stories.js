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
      const items = ['Apple', 'Graves', 'Banana', 'Strawberry'];
      return <React.Fragment>
        <button>Test</button>
        <List static={false}>
          {
            items.map(item => <Item>{item}</Item>)
          }
          <Item>
            <a href="google.com">google</a>
          </Item>
        </List>
        <button>Test</button>
      </React.Fragment>

    })
  );
