import React from 'react';
import shallow from '@util/shallow';
import Input from '../Input';
import theme from '@components/theme';

const wrap = (props = {}) => shallow(<Input {...props} />, theme);

describe('Testing component rendering.', () => {
  it('Should render component.', () => {
    wrap();
  });
});
