const path = require('path');

module.exports = {
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
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'stylelint-custom-processor-loader',
            options: {
              emitWarning: true,
            },
          },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
    ],
  },
};
