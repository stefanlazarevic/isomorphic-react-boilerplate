import React from 'react';
import shallow from '@util/shallow';
import Paragraph from '../Paragraph';
import theme from '@theme';

const wrap = (props = {}) => shallow(<Paragraph {...props} />, theme);

describe('Testing component rendering.', () => {
  it('Should render component.', () => {
    wrap();
  });
});
