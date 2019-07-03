const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin;
const webpackNodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const BASE_CONFIG = require('./webpack.config.base');

const CLIENT_PROD_CONFIG = {
  name: 'webpack-client-prod-config',
  target: 'web',
  mode: 'production',
  stats: 'errors-only',
  entry: {
    app: path.resolve(__dirname, '../src/client/client.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.ejs'),
      filename: './index.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        xhtml: true,
      },
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(__dirname, '../dist/static/react-loadable.json'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Production bundle has been created.'],
        notes: ['Start production server with command ``npm run server``'],
      },
    }),
    new CopyWebpackPlugin([
      {
        ignore: ['index.html', 'index.ejs'],
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist/static'),
      },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 9,
      },
    }),
  ],
};

const SERVER_PROD_CONFIG = {
  name: 'webpack-server-prod-config',
  target: 'node',
  mode: 'development',
  stats: 'errors-only',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

module.exports = [
  merge(BASE_CONFIG, CLIENT_PROD_CONFIG),
  merge(BASE_CONFIG, SERVER_PROD_CONFIG),
];
