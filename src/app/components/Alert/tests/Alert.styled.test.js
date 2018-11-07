import React from 'react';
import shallow from '@util/shallow';
import Alert from '../Alert.styled';
import theme from '@theme';

const wrap = (props = {}) => shallow(<Alert {...props} />, theme);

describe('Testing component rendering.', () => {
  it('Should render component.', () => {
    wrap();
  });
});
