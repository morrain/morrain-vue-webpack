'use strict'

process.env.NODE_ENV = 'development';

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);
const webpackDevServerConfig = Object.assign({
    stats: {
        colors: true
    }
}, webpackConfig.devServer);

const server = new webpackDevServer(compiler, webpackDevServerConfig);

server.listen(webpackDevServerConfig.port, webpackDevServerConfig.host, function () {
    console.log('dev server listening on port:' + webpackDevServerConfig.port);
    console.log();
    console.log('http://' + webpackDevServerConfig.host + ':' + webpackDevServerConfig.port);
    console.log();
});
