import React from 'react';
import renderer from 'react-test-renderer';
import shallow from '@util/shallow';
import Heading from './Heading.styled';
import { LightTheme } from '@design';

const wrap = (props = {}) => shallow(<Heading {...props} />, LightTheme);

describe('Testing component rendering.', () => {
  it('Matches a last snapshot.', () => {
    const tree = renderer.create(wrap().dive()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders component.', () => {
    wrap();
  });

  it('Renders "h1" element by default.', () => {
    const wrapper = wrap().dive();
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('Renders heading from level 1 to 6 when "level" property is passed.', () => {
    expect(
      wrap({ level: 1 })
        .dive()
        .find('h1')
    ).toHaveLength(1);
    expect(
      wrap({ level: 2 })
        .dive()
        .find('h2')
    ).toHaveLength(1);
    expect(
      wrap({ level: 3 })
        .dive()
        .find('h3')
    ).toHaveLength(1);
    expect(
      wrap({ level: 4 })
        .dive()
        .find('h4')
    ).toHaveLength(1);
    expect(
      wrap({ level: 5 })
        .dive()
        .find('h5')
    ).toHaveLength(1);
    expect(
      wrap({ level: 6 })
        .dive()
        .find('h6')
    ).toHaveLength(1);
  });

  it('Renders heading with text if it is passed as children.', () => {
    const wrapper = wrap({ children: 'Heading' }).dive();
    expect(wrapper.find('h1').contains('Heading')).toBe(true);
  });

  it('Renders heading with text if it is passed as "text" property.', () => {
    const wrapper = wrap({ text: 'Heading' }).dive();
    expect(wrapper.find('h1').contains('Heading')).toBe(true);
  });
});

describe('Testing component UI.', () => {
  /** Put your style tests in here. */
});
