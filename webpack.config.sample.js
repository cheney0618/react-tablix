var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './sample/index.js',
    output: {
        path: path.join(__dirname, 'sample'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },


    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.join(__dirname, './sample'),
        ],
        extensions: [
            '.jsx',
            '.js',
            '.json',
        ],
    }
};