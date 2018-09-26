module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // Convert jsx to normal es5 function calls.
                        ['env', { targets: { browsers: ['last 2 versions'] } }],
                        'stage-0',
                        'flow',
                    ],
                    plugins: [
                        ['babel-plugin-react-css-modules',{
                            'generateScopedName': '[name]__[local]'
                        }],
                        'react-loadable/babel'
                    ],
                }
            }
        ]
    }
};
