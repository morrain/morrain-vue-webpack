'use strict'

//执行构建之前先检查node以及npm的版本
require('./check-versions')();

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js');

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err;

    if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'))
        process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
})