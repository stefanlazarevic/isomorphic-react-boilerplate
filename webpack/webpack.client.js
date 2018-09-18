const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const root = path.resolve(__dirname, '../');

const config = {
    // Inform webpack that we are building bundle for node.js
    target: 'web',

    // Tell webpack the root file of our server application
    entry: {
        main: `${root}/src/client/index.js`,
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-loadable',
            'react-helmet'
        ],
    },

    // Tell webpack where to put the output file that is generated.
    output: {
        filename: '[name]-[chunkHash].js',
        chunkFilename: '[name]-[chunkHash].js',
        path: `${root}/build/public`,
        publicPath: '/', // Tell htmlWebpackPlugin from where to build bundle paths.
    },

    // Teach webpack which extensions to try to use for import.
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV || 'development'
        }),
        new HtmlWebpackPlugin({
            template: `${root}/src/server/index.html`,
            filename: '../index.html', // Since the output is build/public we need to step one directory out.
        }),
    ]
};

module.exports = merge(baseConfig, config);
