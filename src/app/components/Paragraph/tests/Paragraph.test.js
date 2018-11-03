import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from '../Paragraph';

const wrap = (props = {}) => shallow(<Paragraph {...props} />);

describe('Testing component rendering.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders "p" element by default.', () => {
    const wrapper = wrap();
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('Renders paragraph tag with text if it is passed as props.', () => {
    const wrapper = wrap({ children: 'paragraph text' });
    expect(wrapper.find('p').contains('paragraph text')).toBe(true);
  });
});
