const DEBUG = false;

module.exports = {
    // Tell webpack to generate module source map if we are not in production mode.
    devtool: DEBUG ? 'cheap-module-source-map' : 'hidden-source-map',
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // Convert jsx to normal es5 function calls.
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ],
                    plugins: [
                        "loadable-components/babel"
                    ],
                }
            }
        ]
    }
};
