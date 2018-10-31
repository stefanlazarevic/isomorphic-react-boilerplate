import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const wrap = (props = {}) => shallow(<Button {...props} />);

describe('Testing component rendering.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders "button" element.', () => {
    const wrapper = wrap();
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('Renders button with type "button" by default.', () => {
    const wrapper = wrap();
    expect(wrapper.find({ type: 'button' })).toHaveLength(1);
  });

  it('Renders component with children when passed in.', () => {
    const wrapper = wrap({ children: 'Test' });
    expect(wrapper.contains('Test')).toBe(true);
  });

  it('Renders props when passed in.', () => {
    expect(wrap({ disabled: true }).find({ disabled: true })).toHaveLength(1);
    expect(wrap({ type: 'submit' }).find({ type: 'submit' })).toHaveLength(1);
  });
});

describe('Testing component event handlers.', () => {
  it('Can handle "click" event.', () => {
    const onClick = jest.fn();
    const wrapper = wrap({ onClick });
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
