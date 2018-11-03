import React from 'react';
import shallow from '@util/shallow';
import Button from '../Button';
import theme from '@components/theme';

const wrap = (props = {}) => shallow(<Button {...props} />, theme);

describe('Testing component rendering.', () => {
  it('Should render component.', () => {
    wrap();
  });
});
