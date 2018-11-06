import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { lightTheme, darkTheme } from '@design';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import jest from 'jest-mock';
import { withOptions } from '@storybook/addon-options';

const LIGHT_THEME = Object.assign({ name: "Light" }, lightTheme);
const DARK_THEME = Object.assign({ name: "Dark" }, darkTheme);

const themes = [LIGHT_THEME, DARK_THEME];


// Option defaults:
addDecorator(
  withOptions({
    addonPanelInRight: true,
    hierarchyRootSeparator: /\|/,
  })
);

addDecorator(withThemesProvider(themes));
addDecorator(story => <div style={{ textAlign: 'left' }}>{story()}</div>);
addDecorator(withNotes);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../src/app/', true, /.stories.js$/);

function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

window.describe = describe;
window.it = it;
window.expect = expect;
window.jest = jest;

enzymeConfigure({ adapter: new Adapter() });
configure(loadStories, module);
