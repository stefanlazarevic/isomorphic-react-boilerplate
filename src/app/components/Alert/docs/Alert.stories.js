import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import { specs } from 'storybook-addon-specifications';
import storyPreview from '@util/storyPreview';

import Alert from '../Alert.styled';
import tests from '../tests/Alert.test';

import AlertDocumentation from './Alert.md';

storiesOf('Components|Feedback', module).add(
  'Alert',
  storyPreview(AlertDocumentation, () => {
    specs(() => tests);
    return (
      <Alert
        type={select('Type', ['info', 'success', 'error', 'warning'], 'info')}
        title={text('Title', 'Information message:')}
        message={text('Message', 'Information message goes here.')}
        inline={boolean('Inline', true)}
        onClose={action('Alert is now closed.')}
      />
    );
  }),
  {
    knobs: {
      timestamps: true,
      escapeHTML: true,
    },
    notes: {
      markdown:
        '- When ``autoclose`` property is present on component, ``Alert`` will close automatically after 5 seconds.',
    },
  }
);
