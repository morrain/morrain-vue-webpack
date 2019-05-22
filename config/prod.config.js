
const path = require('path');

const env = require('yargs').argv.env || 'online';

module.exports = {
    index: path.resolve(__dirname, '../dist/index.html'),

    env: env,

    productionSourceMap: env === 'test',//生产环境是否需要开启sourceMap。生产环境因为又分为测试、预发、线上等，到时根据构建命令来配置此参数。只有在测试环境下才开始sourceMap，预发和线上不开启

    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    //path
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
}