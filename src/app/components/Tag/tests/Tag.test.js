import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { addSerializer } from 'jest-specific-snapshot';

import shallow from '@util/shallow';
// import Tag from '../Tag.styled';
import { Tag } from '@components';
import { LightTheme } from '@design';

const wrap = (props = {}) => shallow(<Tag {...props} />, LightTheme);
addSerializer(styleSheetSerializer);

describe('General component tests.', () => {
  // it('Should match the last snapshot.', () => {
  //   const styledComponent = wrap();
  //   const component = styledComponent.dive();
  //   expect(renderer.create(component).toJSON()).toMatchSnapshot();
  //   expect(renderer.create(styledComponent).toJSON()).toMatchSnapshot();
  // });

  it('Should have "visible" and "checked" states.', () => {
    const component = wrap().dive();
    expect(component.state('visible')).toBeDefined();
    expect(component.state('checked')).toBeDefined();
  });

  it('Should set "visible" state to the value of "visible" property.', () => {
    const component = wrap({ visible: false }).dive();
    expect(component.state('visible')).toBe(false);
  });

  it('Should set "checked" state to the value of "checked" property.', () => {
    const component = wrap({ checked: true }).dive();
    expect(component.state('checked')).toBe(true);
  });
});

describe('Testing component rendering.', () => {
  it('Should render a "div" element by the default.', () => {
    const component = wrap().dive();
    expect(component.get(0).type).toEqual('div');
  });

  it('Should accept property "renderAs" and render component as passed value.', () => {
    const component = wrap({ renderAs: 'li' }).dive();
    expect(component.get(0).type).toEqual('li');
  });

  it('Should accepts child components.', () => {
    const children = 'Tag content';
    const component = wrap({ children }).dive();
    expect(component.text()).toEqual(children);
  });

  it('Should render content from "label" property.', () => {
    const label = 'Tag content';
    const component = wrap({ label }).dive();
    expect(component.text()).toEqual(label);
  });
});

describe('Testing component UI.', () => {
  it('Should set "color" to the value of "labelColor" property.', () => {
    const labelColor = '#000';
    const component = wrap({ labelColor });
    const render = renderer.create(component).toJSON();
    expect(render).toHaveStyleRule('color', labelColor);
  });

  it('Should set "background-color" and "border-color" to the value of "bgColor" property.', () => {
    const bgColor = '#ccc';
    const component = wrap({ bgColor });
    const render = renderer.create(component).toJSON();
    expect(render).toHaveStyleRule('background-color', bgColor);
    expect(render).toHaveStyleRule('border-color', bgColor);
  });

  it('Should render "cursor" as "pointer/hand" when "clickable" property is passed.', () => {
    const component = wrap({ clickable: true });
    const render = renderer.create(component).toJSON();
    expect(render).toHaveStyleRule('cursor', 'pointer');
  });
});

describe('Testing component event handlers.', () => {
  it('Should execute "onChange" callback on Tag click if "clickable" property is passed.', () => {
    const onChange = jest.fn();
    const component = wrap({ clickable: true, onChange }).dive();
    component.find('div').simulate('click');
    expect(onChange).toBeCalled();
  });

  it('Should not execute "onChange" callback on Tag click if "clickable" property isn\'t passed.', () => {
    const onChange = jest.fn();
    const component = wrap({ onChange }).dive();
    component.find('div').simulate('click');
    expect(onChange).not.toBeCalled();
  });
});
