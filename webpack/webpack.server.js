/**
 * Webpack core requirements.
 */
require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

/**
 * Define application directory paths.
 */
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = `${ROOT_PATH}/src`;
const BUILD_PATH = `${ROOT_PATH}/build`;
const APP_PATH = `${SRC_PATH}/app`;
const CLIENT_ROOT = `${SRC_PATH}/client`;
const SERVER_ROOT = `${SRC_PATH}/server`;
const PUBLIC_PATH = '/';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * Webpack additional requirements.
 */
const baseConfig = require('./webpack.base.js');

/**
 * Webpack server configuration.
 */
const config = {
  /**
   * Configuration name.
   */
  name: 'server',

  /**
   * Inform webpack that we are building bundle for node.js.
   */
  target: 'node',

  // mode: IS_PRODUCTION ? 'production' : 'development',

  /**
   * Tell webpack the root file of our web application
   */
  entry: `${SERVER_ROOT}/server.js`,

  /**
   * Tell webpack where to put the output file that is generated.
   */
  output: {
    filename: 'server.bundle.js',
    path: BUILD_PATH,
    publicPath: PUBLIC_PATH
  },

  /**
   *  Teach webpack which extensions to try to use for import.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  devtool: IS_PRODUCTION ? false : 'source-map',

  watch: !IS_PRODUCTION,

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
    ]
  },

  /**
   * Tell the webpack not to bundle any libraries into our final bundle if
   * they exists inside the node moduels.
   */
  externals: [webpackNodeExternals()],

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(IS_PRODUCTION ? 'production' : 'development'),
      __isBrowser__: 'false',
    }),

    /**
     * Tell webpack that it does not need to create chunks
     * for dynamic imports when building server code.
     */
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ]
};

module.exports = merge(baseConfig, config);
