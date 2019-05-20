function HelloWorldPlugins(options) {

}

HelloWorldPlugins.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        console.log('Hello World! Webpack!');
    });
}

exports.HelloWorldPlugins = HelloWorldPlugins;