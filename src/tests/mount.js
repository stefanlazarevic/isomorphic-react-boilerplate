import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';

export const mountWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
};

export default mountWithTheme;
