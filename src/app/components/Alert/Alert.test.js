import React from 'react';
import renderer from 'react-test-renderer';
import mount from '@util/shallow';
import Alert from './Alert.styled';
import { LightTheme } from '@design';

const wrap = (props = {}) => mount(<Alert {...props} />, LightTheme);

describe('Testing component rendering.', () => {
  it('Matches a last snapshot.', () => {
    const tree = renderer.create(wrap().dive()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders component.', () => {
    wrap();
  });

  it('Renders component with "visible" state set to "true" by the default.', () => {
    const wrapper = wrap().dive();
    expect(wrapper.state().visible).toBe(true);
  });

  it('Renders a "div" element.', () => {
    const wrapper = wrap().dive();
    expect(wrapper.get(0).type).toBe('div');
  });

  it('Renders component with "type" set to "info" by the default.', () => {
    const wrapper = wrap().dive();
    expect(wrapper.props().type).toEqual('info');
  });
});

describe('Testing component UI.', () => {
  /** Put your style tests in here. */
});

describe('Testing component event handlers.', () => {
  it('Closing component triggeres "onClose" callback function.', () => {
    const onClose = jest.fn();
    const wrapper = wrap({ onClose }).dive();
    wrapper.instance().close();
    expect(onClose).toHaveBeenCalled();
  });

  it('Closed component returns null.', () => {
    const wrapper = wrap().dive();
    wrapper.instance().close();
    expect(wrapper.get(0)).toBe(null);
  });

  it('Auto close after 5 seconds if "autoclose" property is passed.', () => {
    const onClose = jest.fn();
    wrap({ autoclose: true, onClose }).dive();
    setTimeout(() => {
      expect(onClose).toHaveBeenCalled();
    }, 5010);
  });
});
