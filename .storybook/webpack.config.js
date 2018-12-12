// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@config': path.resolve(__dirname, '../config'),
      '@app': path.resolve(__dirname, '../src/app'),
      '@components': path.resolve(__dirname, '../src/app/components'),
      '@redux': path.resolve(__dirname, '../src/app/redux'),
      '@pages': path.resolve(__dirname, '../src/app/pages'),
      '@routes': path.resolve(__dirname, '../src/app/routes'),
      '@util': path.resolve(__dirname, '../src/app/util'),
      '@design': path.resolve(__dirname, '../src/app/design'),
      '@icons': path.resolve(__dirname, '../src/app/design/Iconography'),
      '@theme': path.resolve(__dirname, '../src/app/design/Theme'),
    },
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  watchOptions: {
    ignored: [
      'node_modules',
      'dist',
    ]
  },
};
