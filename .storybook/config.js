import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { withTests } from '@storybook/addon-jest';
import results from './jest-test-results.json';

import { LightTheme, DarkTheme } from '@design/Theme';

const LIGHT_SWATCH = Object.assign({ name: 'Light' }, LightTheme);
const DARK_SWATCH = Object.assign({ name: 'Dark' }, DarkTheme);

const themes = [LIGHT_SWATCH, DARK_SWATCH];

addDecorator(withThemesProvider(themes));

addDecorator(
  withOptions({
    addonPanelInRight: true,
    hierarchyRootSeparator: /\|/,
  })
);

addDecorator(
  withTests({
    results,
  })
);

addDecorator(story => <div style={{ textAlign: 'left' }}>{story()}</div>);
addDecorator(withNotes);
addDecorator(withKnobs, {
  knobs: {
    timestamps: true,
    escapeHTML: true,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/app/', true, /.stories.js$/);

function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);
