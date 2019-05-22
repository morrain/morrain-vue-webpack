'use strict'

const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');
const path = require('path');

const config = require('../config');
const utils = require('./utils');

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const webpackConfig = merge(webpackBaseConfig, {
    output: {
        filename: utils.assetsPath('js/[name].[hash].js'),
        publicPath: config.dev.assetsPublicPath
    },
    devtool: config.dev.devtool,
    devServer: {
        clientLogLevel: 'warning',  //https://www.webpackjs.com/configuration/dev-server/#devserver-clientloglevel
        historyApiFallback: true,   //https://www.webpackjs.com/configuration/dev-server/#devserver-historyapifallback
        hot: true,                  //https://www.webpackjs.com/configuration/dev-server/#devserver-hot
        compress: true,             //https://www.webpackjs.com/configuration/dev-server/#devserver-compress
        open: config.dev.autoOpenBrowser, //是否自动打开浏览器
        overlay: {                  //https://webpack.docschina.org/configuration/dev-server/#devserver-overlay
            warnings: true,
            errors: true
        },
        contentBase: path.resolve(__dirname, '../dist'),
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,     // https://www.webpackjs.com/configuration/dev-server/#devserver-proxy
        quiet: true,                      // https://www.webpackjs.com/configuration/dev-server/#devserver-quiet
        watchOptions: {                   // https://www.webpackjs.com/configuration/watch/#watchoptions
            aggregateTimeout: 500,
            poll: config.dev.poll,
            ignored: '/node_modules'
        }
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
});

module.exports = webpackConfig;