'use strict'


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config');
const utils = require('./utils');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, '../'),
    entry: {
        entry1: './src/entry1.js',
        entry2: './src/entry2.js'
    },
    output: {
        path: config.build.assetsRoot
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],//加上.vue后，表示import .vue文件时不需要加后缀
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'vue$': 'vue/dist/vue.esm.js'   //https://www.webpackjs.com/configuration/resolve/#resolve-alias      https://cn.vuejs.org/v2/guide/installation.html
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
        })
    ]
};