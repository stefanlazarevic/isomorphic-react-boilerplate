const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we are building bundle for node.js
    target: 'web',

    // Tell webpack the root file of our server application
    entry: './src/client/index.js',

    // Tell webpack where to put the output file that is generated.
    output: {
        filename: '[name]-[chunkHash].js',
        chunkFilename: '[name]-[chunkHash].js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/', // Tell htmlWebpackPlugin from where to build bundle paths.
    },

    // Teach webpack which extensions to try to use for import.
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new HtmlWebpackPlugin({
            template: './src/server/index.html',
            filename: '../index.html', // Since the output is build/public we need to step one directory out.
        }),
    ]
};

module.exports = merge(baseConfig, config);
