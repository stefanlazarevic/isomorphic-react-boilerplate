import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot';

import { Breadcrumb } from '@components';
import { LightTheme } from '@design';
import mount from '@util/mount';

const wrap = (props = {}) => mount(<Breadcrumb {...props} />, LightTheme);

addSerializer(styleSheetSerializer);

describe('General component tests.', () => {
  it('Should match last snapshot.', () => {
    // TODO
  });
});

describe('Testing component rendering.', () => {
  it('Should render a "ol" element.', () => {
    const wrapper = wrap();
    expect(wrapper.find('ol')).toHaveLength(1);
  });
});
