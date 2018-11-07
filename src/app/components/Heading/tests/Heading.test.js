import React from 'react';
import mount from '@util/mount';
import Heading from '../Heading.styled';
import { LightTheme } from '@design';

const wrap = (props = {}) => mount(<Heading {...props} />, LightTheme);

export default describe('Heading.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders "h1" element by default.', () => {
    const wrapper = wrap();
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('Renders heading from level 1 to 6 when "level" property is passed.', () => {
    expect(wrap({ level: 1 }).find('h1')).toHaveLength(1);
    expect(wrap({ level: 2 }).find('h2')).toHaveLength(1);
    expect(wrap({ level: 3 }).find('h3')).toHaveLength(1);
    expect(wrap({ level: 4 }).find('h4')).toHaveLength(1);
    expect(wrap({ level: 5 }).find('h5')).toHaveLength(1);
    expect(wrap({ level: 6 }).find('h6')).toHaveLength(1);
  });

  it('Renders heading with text if it is passed as children.', () => {
    const wrapper = wrap({ children: 'Heading' });
    expect(wrapper.find('h1').contains('Heading')).toBe(true);
  });

  it('Renders heading with text if it is passed as "text" property.', () => {
    const wrapper = wrap({ text: 'Heading' });
    expect(wrapper.find('h1').contains('Heading')).toBe(true);
  });
});
