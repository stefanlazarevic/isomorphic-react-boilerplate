import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Alert from '../Alert.styled';
import AlertDocumentation from './README.md';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { specs } from 'storybook-addon-specifications';
import { renders } from '../tests/Alert.test';
import styled from 'styled-components';

const withCustomPreview = withDocs({
  PreviewComponent: styled.div`
    padding: 25px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  `,
});

storiesOf('Components/Feedback', module).add(
  'Alert',
  withCustomPreview(AlertDocumentation, () => {
    specs(() => renders);
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
