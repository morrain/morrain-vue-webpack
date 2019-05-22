'use strict'



class HelloWorldPlugins {
    apply(compiler) {

        const pluginName = 'HelloWorldPlugins';
        const hooks = compiler.hooks;

        //编译(compilation)完成。
        hooks.done.tap(pluginName, compilation => {
            console.log('\nHello World! Webpack!' + ' done!');
        });


        // 生成资源到 output 目录之前。
        hooks.emit.tapPromise(pluginName, compilation => new Promise(resolve => {
            console.log('\nHello World! Webpack!' + ' emit doing!');

            setTimeout(() => {
                console.log('timer done!');
                resolve();//emit事件是异步的，必须通过调callback继续下面的编辑。此处如果不调用，上面的done就不会触发。

            }, 1000);
        }));
        // 编译(compilation)创建之后，执行插件。
        hooks.compilation.tap(pluginName, compilation => {
            // 优化阶段开始时触发。
            compilation.plugin("optimize", function () {
                console.log("Assets are being optimized.");
            });
        });
    }
}

exports.HelloWorldPlugins = HelloWorldPlugins;


class FileList {
    apply(compiler) {
        const pluginName = 'FileList';
        const hooks = compiler.hooks;
        hooks.emit.tapPromise(pluginName, compilation => new Promise(resolve => {

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

            resolve();
        }));
    }
}

exports.FileList = FileList;