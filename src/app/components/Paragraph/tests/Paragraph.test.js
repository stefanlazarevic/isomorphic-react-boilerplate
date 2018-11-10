import React from 'react';
import renderer from 'react-test-renderer';
import shallow from '@util/shallow';
import { Paragraph } from '@components';
import { LightTheme } from '@design';

const wrap = (props = {}) => shallow(<Paragraph {...props} />, LightTheme);

describe('Testing component rendering.', () => {
  it('Matches a last snapshot.', () => {
    const tree = renderer.create(wrap().dive()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders component.', () => {
    wrap();
  });

  it('Renders "p" element by default.', () => {
    const wrapper = wrap().dive();
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('Renders paragraph tag with text if it is passed as props.', () => {
    const wrapper = wrap({ children: 'paragraph text' }).dive();
    expect(wrapper.find('p').contains('paragraph text')).toBe(true);
  });
});
