import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const wrap = (props = {}) => shallow(<Input {...props} />);

describe('Testing component rendering.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders "input" element.', () => {
    const wrapper = wrap();
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('Renders input with type "text" by default.', () => {
    const wrapper = wrap();
    expect(wrapper.find({ type: 'text' })).toHaveLength(1);
  });

  it('Renders props when passed in.', () => {
    expect(wrap({ type: 'checkbox' }).find({ type: 'checkbox' })).toHaveLength(1); // eslint-disable-line
    expect(wrap({ placeholder: 'Test' }).find({ placeholder: 'Test' })).toHaveLength(1); // eslint-disable-line
  });
});

describe('Testing component event handlers.', () => {
  it('Can handle "change" event.', () => {
    const onChange = jest.fn();
    const wrapper = wrap({ onChange });
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
