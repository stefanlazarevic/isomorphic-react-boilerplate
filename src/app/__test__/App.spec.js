import React from 'react';
import App from '@app/App';
import 'jest-styled-components';
import Loadable from 'react-loadable';
import { shallowWithTheme } from '@utils/shallow';

describe('Root App Component', () => {
  it('Component matches previous snapshot.', () => {
    Loadable.preloadAll().then(() => {
      const app = shallowWithTheme(<App />, {});

      expect(app).toMatchSnapshot();
    });
  });
});
