'use strict'

const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = merge(webpackBaseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 9000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
        })
    ]
});

module.exports = webpackConfig;