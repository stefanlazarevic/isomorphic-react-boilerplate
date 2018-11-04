import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

const wrap = (props = {}) => shallow(<Checkbox {...props} />);

describe('Testing component rendering.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders an "input" element with type "checkbox".', () => {
    const wrapper = wrap();
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('Renders component with children when passed in.', () => {
    const wrapper = wrap({ label: 'Checkbox Label' });
    expect(wrapper.find('label').contains('Checkbox Label')).toBe(true);
  });
});

describe('Testing component event handlers.', () => {
  it('Can handle "click" event.', () => {
    const onChange = jest.fn();
    const wrapper = wrap({ onChange });
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
