/**
 * Webpack core requirements.
 */
require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Define application directory paths.
 */
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = `${ROOT_PATH}/src`;
const BUILD_PATH = `${ROOT_PATH}/build`;
const APP_PATH = `${SRC_PATH}/app`;
const CLIENT_ROOT = `${SRC_PATH}/client`;
const SERVER_ROOT = `${SRC_PATH}/server`;
const PUBLIC_PATH = '/'; // Tell htmlWebpackPlugin from where to build bundle paths.
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * Webpack additional requirements.
 */
const baseConfig = require('./webpack.base.js');

/**
 * Webpack client configuration.
 */
const config = {
    /**
     * Configuration name.
     */
    name: 'client',

    /**
     * Inform webpack that we are building bundle for browser.
     */
    target: 'web',

    watch: !IS_PRODUCTION,

    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    /**
     * Tell webpack the root file of our web application
     */
    entry: {
        main: `${CLIENT_ROOT}/client.jsx`,
    },

    /**
     * Tell webpack where to put the output file that is generated.
     */
    output: {
        filename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].dev.js',
        chunkFilename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].dev.js',
        path: `${BUILD_PATH}/public`,
        publicPath: PUBLIC_PATH,
    },

    /**
     *  Teach webpack which extensions to try to use for import.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use:
                ExtractTextPlugin.extract({
                    fallback: 'isomorphic-style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]',
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
                        }
                    ]
                })
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(IS_PRODUCTION ? 'production' : 'development'),
            __isBrowser__: 'true',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: IS_PRODUCTION ? 'js/[name].[chunkhash].js' : 'js/[name].dev.js',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename: IS_PRODUCTION ? 'js/[name].[chunkhash].js' : 'js/[name].dev.js',
            minChunks: Infinity,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            template: `${SERVER_ROOT}/index.html`,
            filename: '../index.html', // Since the output is build/public we need to step one directory out.
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                minifyJS: true,
                xhtml: true,
            },
            PUBLIC_PATH: PUBLIC_PATH,
        }),
        new ExtractTextPlugin({
            filename: IS_PRODUCTION ? 'css/[name].[contenthash].css' : 'css/[name].dev.css',
            allChunks: true
        }),
        new ReactLoadablePlugin({
            filename: 'build/public/react-loadable.json',
        }),
    ]
};

/**
 * If we are in production mode, remove build public folder.
 */
if (IS_PRODUCTION) {
    config.plugins = [
        new CleanWebpackPlugin('build/*.*', {
            root: ROOT_PATH,
            verbose: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            extractComments: true,
            output: {
                comments: false
            }
        }),
    ].concat(config.plugins);
}

module.exports = merge(baseConfig, config);
