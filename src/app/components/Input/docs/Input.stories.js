import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Input } from '@components';

import InputDocumentation from './Input.md';

storiesOf('Components|Data Entry', module)
  .addParameters({ jest: ['Input'] })
  .add(
    'Input',
    storyPreview(InputDocumentation, () => {
      return (
        <Input
          disabled={boolean('Disabled', false)}
          type={select(
            'Type',
            ['text', 'search', 'url', 'password', 'hidden', 'email'],
            'url'
          )}
          name="website"
          placeholder={text('Placeholder', 'Put your content here.')}
        />
      );
    })
  );
