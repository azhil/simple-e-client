const webpack = require('webpack');
const merge = require('webpack-merge');

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
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
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