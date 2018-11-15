import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot';

import shallow from '@util/shallow';
import { Breadcrumb } from '@components';
import { LightTheme } from '@design';

import { StaticRouter as Router } from 'react-router-dom';

const wrap = (props = { location: { pathname: '/' } }) =>
  shallow(
    <Router location={location} context={{}}>
      <Breadcrumb {...props} />
    </Router>,
    LightTheme
  );

addSerializer(styleSheetSerializer);

describe('General component tests.', () => {
  it('Should match last snapshot.', () => {
    const styledComponent = wrap();
    expect(renderer.create(styledComponent).toJSON()).toMatchSnapshot();
  });
});

describe('Testing component rendering.', () => {});
