'use strict'

process.env.NODE_ENV = 'development';

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const portfinder = require('portfinder');
const chalk = require('chalk');

const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);
const webpackDevServerConfig = Object.assign({
    stats: {
        colors: true
    }
}, webpackConfig.devServer);

const server = new webpackDevServer(compiler, webpackDevServerConfig);


portfinder.basePort = webpackDevServerConfig.port;
portfinder.getPortPromise().then(port => {

    webpackConfig.devServer.port = port;
    webpackDevServerConfig.port = port;

    server.listen(port, webpackDevServerConfig.host, function () {

        console.log(chalk.green('dev server listening on port:' + port));
        console.log();
        console.log(chalk.green('http://' + webpackDevServerConfig.host + ':' + port));
        console.log();

    });

}).catch(error => {
    console.log(chalk.red('can not find availabe port!'));
});



