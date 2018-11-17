import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import { shape } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const router = {
  history: new BrowserRouter().history,
  route: {
    location: { pathname: '/' },
    match: {},
  },
};

export const mountWithTheme = (tree, theme) => {
  const themeContext = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  const context = Object.assign(
    {},
    {
      ...themeContext,
      router,
    }
  );

  const childContextTypes = Object.assign(
    {},
    {
      ...ThemeProvider.childContextTypes,
      router: shape({}),
    }
  );

  return mount(tree, {
    context,
    childContextTypes,
  });
};

export default mountWithTheme;
