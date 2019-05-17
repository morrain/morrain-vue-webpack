'use strict'

const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');

const webpackConfig = merge(webpackBaseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })
    ]
});

module.exports = webpackConfig;