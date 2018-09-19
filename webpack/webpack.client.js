const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            'react-helmet',
            'loadable-components',
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

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                sourceMap: true,
                                camelCase: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('cssnano'),
                                    require('autoprefixer')
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'css/styles.[chunkhash:6].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: `${root}/src/server/index.html`,
            filename: '../index.html', // Since the output is build/public we need to step one directory out.
        }),
    ]
};

module.exports = merge(baseConfig, config);
