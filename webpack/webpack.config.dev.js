const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const BASE_CONFIG = require('./webpack.config.base');

const CLIENT_DEV_CONFIG = {
  name: 'webpack-dev-config',
  target: 'web',
  mode: 'development',
  stats: 'errors-only',
  entry: path.resolve(__dirname, '../src/client/client.js'),
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      {
        server: false,
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3001',
        open: 'local',
      },
      { reload: false }
    ),
    new DashboardPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Application is now running at http://localhost:3000'],
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    quiet: true,
  },
};

module.exports = merge(BASE_CONFIG, CLIENT_DEV_CONFIG);
