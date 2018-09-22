/**
 * Webpack core requirements.
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

/**
 * Define application directory paths.
 */
const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = `${ROOT_PATH}/src`;
const BUILD_PATH = `${ROOT_PATH}/build`;
const CLIENT_ROOT = `${SRC_PATH}/client`;
const SERVER_ROOT = `${SRC_PATH}/server`;
const PUBLIC_PATH = '/'; // Tell htmlWebpackPlugin from where to build bundle paths.

/**
 * Webpack additional requirements.
 */
const baseConfig = require('./webpack.base.js');
const package = require(`${ROOT_PATH}/package.json`);

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

    /**
     * Tell webpack the root file of our web application
     */
    entry: {
        main: `${CLIENT_ROOT}/index.js`,
        vendor: Object.keys(package.dependencies),
    },

    /**
     * Tell webpack where to put the output file that is generated.
     */
    output: {
        filename: '[name]-[chunkHash:5].js',
        chunkFilename: '[name]-[chunkHash:5].js',
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
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
                    ]
                })
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin({
            filename: 'css/styles.css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash:5].js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: `${SERVER_ROOT}/index.html`,
            filename: '../index.html', // Since the output is build/public we need to step one directory out.
            inject:  'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                minifyJS: true,
                xhtml: true,
            }
        }),
        new ReactLoadablePlugin({
            filename: 'react-loadable.json',
        }),
    ]
};

module.exports = merge(baseConfig, config);
