const path = require('path');

module.exports = {
    dev: {
        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),


        productionSourceMap: true,//生产环境是否需要开启sourceMap。生产环境因为又分为测试、预发、线上等，到时根据构建命令来配置此参数

        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        //path
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/'
    }
}