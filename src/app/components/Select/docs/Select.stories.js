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
      const selectData = [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' },
        { value: 'O', label: 'Other' },
      ];
      return (
        <Fragment>
          <Select options={selectData} />
        </Fragment>
      );
    })
  );
