var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react.tablix.js',
        library: 'ReactTablix',
        libraryTarget: 'umd',
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
            },
            // {
            //     test: /\.less/,
            //     use: ['css-loader', 'less-loader']
            // }
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        // {
                        //     loader: 'postcss-loader',
                        //     options: {
                        //         ident: 'postcss',
                        //         plugins: () => [
                        //             autoprefixer({
                        //                 browsers: [
                        //                     'last 2 versions',
                        //                     'Firefox ESR',
                        //                     '> 1%', 'ie >= 8',
                        //                     'iOS >= 8',
                        //                     'Android >= 4'
                        //                 ],
                        //             })
                        //         ],
                        //     }
                        // },
                        'less-loader'
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('react.tablix.css'),
    ],

    // externals: [
    //     {
    //         'react': {
    //             root: 'React',
    //             commonjs2: 'react',
    //             commonjs: 'react',
    //             amd: 'react'
    //         }
    //     },
    //     {
    //         'react-dom': {
    //             root: 'ReactDOM',
    //             commonjs2: 'react-dom',
    //             commonjs: 'react-dom',
    //             amd: 'react-dom'
    //         }
    //     },
    //     {
    //         'prop-types': {
    //             root: 'PropTypes',
    //             commonjs2: 'prop-types',
    //             commonjs: 'prop-types',
    //             amd: 'prop-types'
    //         },
    //     }
    // ],

    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'prop-types': 'prop-types'
    },

    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.join(__dirname, './src'),
        ],
        extensions: [
            '.jsx',
            '.js',
        ],
    }
};