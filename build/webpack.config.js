const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],//加上.vue后，表示import .vue文件时不需要加后缀
        alias: {
            'vue$': 'vue/dist/vue.esm.js'   //https://www.webpackjs.com/configuration/resolve/#resolve-alias      https://cn.vuejs.org/v2/guide/installation.html
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
        })
    ]
};