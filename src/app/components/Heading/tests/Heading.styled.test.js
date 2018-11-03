import React from 'react';
import shallow from '@util/shallow';
import Heading from '../Heading';
import theme from '@components/theme';

const wrap = (props = {}) => shallow(<Heading {...props} />, theme);

describe('Testing component rendering.', () => {
  it('Should render component.', () => {
    wrap();
  });
});
