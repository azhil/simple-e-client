const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlHardDiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: [
        'normalize.css/normalize.css',
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, 'src', 'index.js'),
    ],

    output: {
        path: path.join(__dirname, 'www', 'assets'),
        publicPath: '/assets/',
        filename: 'app.js'
    },

    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),

        new ExtractTextPlugin('base.min.css'),

        new HtmlPlugin({
            title: 'Simple e-mail client',
            filename: path.join(__dirname, 'www', 'index.html'),
            template: path.join(__dirname, 'templates', 'index.ejs'),
            alwaysWriteToDisk: true
        }),

        new HtmlHardDiskPlugin()
    ]
};