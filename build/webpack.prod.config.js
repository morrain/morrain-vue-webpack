'use strict'


const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackBaseConfig = require('./webpack.base.config');
const utils = require('./utils');
const config = require('../config');

const customPlugins = require('./webpack.custom.plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const webpackConfig = merge(webpackBaseConfig, {
    module: {
        rules: [
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }]
    },
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
        new customPlugins.FileList(),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        })
    ]
});

module.exports = webpackConfig;