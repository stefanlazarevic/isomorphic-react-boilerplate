const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we are building bundle for node.js
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/server/index.js',

    // Tell webpack where to put the output file that is generated.
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    // Teach webpack which extensions to try to use for import.
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    // Tell the webpack not to bundle any libraries into our final bundle if
    // they exists inside the node moduels.
    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
