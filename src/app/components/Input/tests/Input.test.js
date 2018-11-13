import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot';
import shallow from '@util/shallow';
import { Input } from '@components';
import { LightTheme } from '@design';

const wrap = (props = { name: 'input' }) =>
  shallow(<Input {...props} />, LightTheme);

addSerializer(styleSheetSerializer);

describe('Testing component snapshot.', () => {
  it('Should match last snapshot.', () => {
    const styledComponent = wrap();
    const component = wrap().dive();
    expect(renderer.create(styledComponent)).toMatchSnapshot();
    expect(renderer.create(component)).toMatchSnapshot();
  });
});

describe('Testing component rendering.', () => {
  it('Should render "div" element to the dom.', () => {
    const component = wrap().dive();
    expect(component.get(0).type).toEqual('div');
  });

  it('Should render "input" element inside the container.', () => {
    const component = wrap().dive();
    expect(component.find('input')).toHaveLength(1);
  });

  it('Should not render "span" element if no "prefix" or "suffix" property is passed.', () => {
    const component = wrap().dive();
    expect(component.find('span')).toHaveLength(0);
  });

  it('Should not render "label" element if no "label" property is passed.', () => {
    const component = wrap().dive();
    expect(component.find('label')).toHaveLength(0);
  });

  it('Should render "label" if "label" property is passed.', () => {
    const component = wrap({ label: 'Label' }).dive();
    expect(component.find('label').text()).toEqual('Label');
  });

  it('Should render "span" if "prefix" property is passed.', () => {
    const component = wrap({ prefix: 'Prefix' }).dive();
    expect(component.find('span').text()).toEqual('Prefix');
  });

  it('Should render "span" if "suffix" property is passed.', () => {
    const component = wrap({ prefix: 'Suffix' }).dive();
    expect(component.find('span').text()).toEqual('Suffix');
  });

  it('Should render two "span" elements if both "prefix" and "suffix" properties are passed.', () => {
    const component = wrap({ prefix: 'Prefix', suffix: 'Suffix' }).dive();
    expect(
      component
        .find('span')
        .first()
        .text()
    ).toEqual('Prefix');
    expect(
      component
        .find('span')
        .last()
        .text()
    ).toEqual('Suffix');
  });
});

describe('Testing component UI.', () => {});

describe('Testing component event handlers.', () => {});
