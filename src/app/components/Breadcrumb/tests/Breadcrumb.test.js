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
    const component = wrap();
    expect(component.find('ol')).toHaveLength(1);
  });

  it('Should render "Home" breadcrumb item when location is root and path is not provided.', () => {
    const component = wrap();
    expect(component.find('li')).toHaveLength(1);
    expect(component.find('li').text()).toEqual('Home');
  });

  it('Should render n + 1 breadcrumb items when path is provided.', () => {
    const component = wrap({ path: '/movies/actions/venom-2018' });
    expect(component.find('li')).toHaveLength(4);
  });

  it('Should render breadcrumb text based on the provided mask.', () => {
    const path = '/movies/actions/venom-2018';
    const mask = 'Movies/Category :category/Venom 2018';
    const maskData = {
      category: (prop, field) => field,
    };
    const component = wrap({ path, mask, maskData });
    expect(
      component
        .find('li')
        .first()
        .text()
    ).toEqual('Home');

    expect(
      component
        .find('li')
        .at(2)
        .text()
    ).toEqual('Category actions');

    expect(
      component
        .find('li')
        .last()
        .text()
    ).toEqual('Venom 2018');
  });

  it('Should have aria label set to "breadcrumb".', () => {
    const component = wrap();
    expect(component.find('ol').prop('aria-label')).toEqual('breadcrumb');
  });
});
