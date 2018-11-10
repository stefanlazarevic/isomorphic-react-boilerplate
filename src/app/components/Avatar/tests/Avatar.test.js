import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot';

import shallow from '@util/shallow';
import { Avatar } from '@components';
import { LightTheme } from '@design';

const wrap = (props = { letter: 'L' }) =>
  shallow(<Avatar {...props} />, LightTheme);
addSerializer(styleSheetSerializer);

describe('General component tests.', () => {
  it('Should match last snapshot.', () => {
    const styledComponent = wrap();
    const component = styledComponent.dive();
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
    expect(renderer.create(styledComponent).toJSON()).toMatchSnapshot();
  });
});

describe('Testing component rendering.', () => {
  it('Should render "div" element.', () => {
    const component = wrap().dive();
    expect(component.get(0).type).toEqual('div');
  });

  it('Should render "img" element inside "div" if "src" property is passed.', () => {
    const component = wrap({ src: '#' }).dive();
    expect(component.find('img')).toHaveLength(1);
  });

  it('Should render "span" element if "src" property is not passed.', () => {
    const component = wrap().dive();
    expect(component.find('span')).toHaveLength(1);
  });

  it('Should not accepts child components.', () => {
    const children = 'icon';
    const component = wrap({ children }).dive();
    expect(component.text()).toEqual('');
  });
});

describe('Testing component UI.', () => {});

describe('Testing component event handlers.', () => {});
