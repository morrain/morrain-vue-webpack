'use strict'


const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackBaseConfig = require('./webpack.base.config');
const utils = require('./utils');


const webpackConfig = merge(webpackBaseConfig, {
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash].js')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })
    ]
});

module.exports = webpackConfig;