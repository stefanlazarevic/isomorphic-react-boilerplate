import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import storyPreview from '@util/storyPreview';

import { Switch } from '@components';

import SwitchDocumentation from './Switch.md';

storiesOf('Components|Data Entry', module)
  .addParameters({ jest: ['Switch'] })
  .add(
    'Switch',
    storyPreview(SwitchDocumentation, () => {
      return <Switch name="switch" checked={true} />;
    })
  );
