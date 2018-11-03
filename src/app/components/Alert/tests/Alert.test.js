import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../Alert';

const wrap = (props = {}) => shallow(<Alert {...props} />);

describe('Testing component rendering.', () => {
  it('Renders component.', () => {
    wrap();
  });

  it('Renders component with "active" state set to "false" by the default.', () => {
    const wrapper = wrap();
    expect(wrapper.state().active).toBe(false);
  });

  it('Renders component with "active" state set to "true" when passed as prop.', () => {
    const wrapper = wrap({ active: true });
    expect(wrapper.state().active).toBe(true);
  });

  it('Renders a "div" element.', () => {
    const wrapper = wrap({ active: true });
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('Does not render when "state" is set to "false".', () => {
    const wrapper = wrap();
    expect(wrapper.get(0)).toBe(null);
  });

  it('Renders component with "type" set to "info" by the default.', () => {
    const wrapper = wrap({ active: true });
    expect(wrapper.props().type).toEqual('info');
  });
});

describe('Testing component event handlers.', () => {
  it('Toggle component visibility with built in "show" and "hide" methods.', () => {
    const wrapper = wrap();
    wrapper.instance().show();
    expect(wrapper.find('div')).toHaveLength(1);
    wrapper.instance().hide();
    expect(wrapper.get(0)).toBe(null);
  });
});
