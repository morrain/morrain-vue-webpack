'use strict'

process.env.NODE_ENV = 'development';

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const portfinder = require('portfinder');
const chalk = require('chalk');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const webpackConfig = require('./webpack.dev.config');
const webpackDevServerConfig = Object.assign({
    stats: {
        colors: true
    }
}, webpackConfig.devServer);
portfinder.basePort = webpackDevServerConfig.port;
portfinder.getPortPromise().then(port => {

    webpackConfig.devServer.port = port;
    webpackDevServerConfig.port = port;

    webpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
            messages: [
                'You application is running here:\n',
                chalk.green(`http://${webpackDevServerConfig.host}:${port}`)
            ],
            notes: ['You can click the link upside to get your site!']
        },
        onErrors: function (severity, errors) {
            // You can listen to errors transformed and prioritized by the plugin
            // severity can be 'error' or 'warning'
        }
    }));

    const compiler = webpack(webpackConfig);
    const server = new webpackDevServer(compiler, webpackDevServerConfig);

    server.listen(port, webpackDevServerConfig.host, function () {
        console.log(chalk.green('dev server is running on port:' + port));
    });

}).catch(error => {
    console.log(chalk.red('can not find availabe port!'));
    console.log(error);
});








