import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import storyPreview from '@util/storyPreview';

import { Select } from '@components';

import SelectDocumentation from './Select.md';

storiesOf('Components|Data Entry', module)
  .addParameters({ jest: ['Select'] })
  .add(
    'Select',
    storyPreview(SelectDocumentation, () => {
      const options = [
        {
          label: 'Alberta',
        },
        {
          label: 'British Columbia',
        },
        {
          label: 'Manitoba',
          disabled: true,
        },
        {
          label: 'New Brunswick',
          disabled: true,
        },
        {
          label: 'Newfoundland and Labrador',
        },
        {
          label: 'Nova Scotia',
        },
        {
          label: 'Ontario',
          disabled: true,
        },
      ];

      return (
        <Fragment>
          <Select options={options} />
        </Fragment>
      );
    })
  );
