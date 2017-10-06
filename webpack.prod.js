const webpack = require('webpack');
const merge = require('webpack-merge');
const copy = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge.strategy(
    {
        'plugins': 'prepend'
    }
)(
    common,
    {
        devtool: 'hidden-source-map',

        plugins: [
            new copy([
                { from: 'spa-github-pages-assets/history-updater.js', to: 'history-updater.js' },
                { from: 'spa-github-pages-assets/404.html', to: '../404.html' }
            ]),

            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production'),
                    'BASENAME': JSON.stringify('/testing-out-gh-pages')
                }
            }),

            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    }
);