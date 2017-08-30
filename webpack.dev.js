const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge.strategy(
    {
        'entry': 'prepend'
    }
)(
    common,
    {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ],

        devServer: {
            hot: true,
            contentBase: path.join(__dirname, 'docs'),
            publicPath: '/assets/',
            historyApiFallback: true
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
);