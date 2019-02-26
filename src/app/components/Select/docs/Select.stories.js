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
          label: 'Yes',
        },
        {
          label: 'Maybe',
        },
        {
          label: 'Disabled',
          disabled: true,
        },
        {
          label: 'No',
        },
      ];

      return (
        <Fragment>
          <Select options={options} />
        </Fragment>
      );
    })
  );
