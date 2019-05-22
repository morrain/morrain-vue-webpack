


module.exports = {
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    //path
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',


    autoOpenBrowser: true,//是否自动打开浏览器窗口
    host: 'localhost',//可修改为本地IP
    port: 8080,
    proxyTable: {},
    poll: false, //https://www.webpackjs.com/configuration/watch/#watchoptions

    cssSourceMap: true

}