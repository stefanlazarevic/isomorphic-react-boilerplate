import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';

import ColorMarkdown from './Color.md';

storiesOf('Design|Guidelines', module)
  .addParameters({
    options: { showAddonPanel: false },
  })
  .add('Color', doc(ColorMarkdown));
