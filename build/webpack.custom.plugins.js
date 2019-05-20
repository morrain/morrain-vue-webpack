function HelloWorldPlugins(options) {

}
HelloWorldPlugins.prototype.apply = function (compiler) {

    //编译(compilation)完成。
    compiler.plugin('done', function (compilation) {
        console.log('\nHello World! Webpack!' + ' done!');
    });
    // 生成资源到 output 目录之前。
    compiler.plugin("emit", function (compilation, callback) {
        console.log('\nHello World! Webpack!' + ' emit doing!');

        callback();//emit事件是异步的，必须通过调callback继续下面的编辑。此处如果不调用，上面的done就不会触发。
    });
    // 编译(compilation)创建之后，执行插件。
    compiler.plugin("compilation", function (compilation) {

        // 优化阶段开始时触发。
        compilation.plugin("optimize", function () {
            console.log("Assets are being optimized.");
        });

    });
}

exports.HelloWorldPlugins = HelloWorldPlugins;


function FileList(options) {

}

FileList.prototype.apply = function (compiler) {

    compiler.plugin('emit', function (compilation, callback) {

        var filelist = 'In this build: \n\n';

        // 遍历所有编译过的资源文件，
        // 对于每个文件名称，都添加一行内容。
        for (var filename in compilation.assets) {
            filelist += ('- ' + filename + '\n');
        }

        // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
        compilation.assets['filelist.md'] = {
            source: function () {
                return filelist;
            },
            size: function () {
                return filelist.length;
            }
        };

        callback();
    });
}

exports.FileList = FileList;