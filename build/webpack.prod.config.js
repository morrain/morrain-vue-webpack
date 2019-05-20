'use strict'


const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackBaseConfig = require('./webpack.base.config');
const utils = require('./utils');
const config = require('../config');

const customPlugins = require('./webpack.custom.plugins');


const webpackConfig = merge(webpackBaseConfig, {
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        publicPath: config.build.assetsPublicPath
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new customPlugins.HelloWorldPlugins({
            param1: 'bac',
            param2: 'abc'
        }),
        new customPlugins.FileList()
    ]
});

module.exports = webpackConfig;