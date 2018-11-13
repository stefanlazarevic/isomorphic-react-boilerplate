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
          label={text('Label', 'Website')}
          inline={boolean('Inline', false)}
          disabled={boolean('Disabled', false)}
          type={select(
            'Type',
            ['text', 'search', 'url', 'password', 'hidden', 'email'],
            'url'
          )}
          name="website"
          prefix={text('Prefix', 'https://')}
          suffix={text('Suffix', '')}
          placeholder={text('Placeholder', 'Your awesome website location.')}
        />
      );
    })
  );
