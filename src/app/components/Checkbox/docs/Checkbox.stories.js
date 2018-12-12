import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Checkbox } from '@components';

import CheckboxDocument from './Checkbox.md';

storiesOf('Components|Data Entry', module)
  .addParameters({ jest: ['Checkbox'] })
  .add(
    'Checkbox',
    storyPreview(CheckboxDocument, () => {
      return <Checkbox name="switch" checked={true} label="Remember me" />;
    })
  );
