'use strict'

const path = require('path');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
}


function cssLoaders(options) {

    function generateLoaders(loaderName, loaderOptions) {
        const loaders = [{
            loader: 'css-loader',
            options: {
                sourceMap: options.sourceMap
            }
        }];

        if (options.usePostCSS) {
            loaders.push({
                loader: 'postcss-loader',
                options: {
                    sourceMap: options.sourceMap
                }
            })
        }

        if (loaderName) loaders.push({
            loader: `${loaderName}-loader`,
            options: {
                sourceMap: options.sourceMap,
                ...(loaderOptions || {})
            }
        });

        if (options.extract) {
            return [MiniCssExtractPlugin.loader, ...loaders];
        } else {
            return ['vue-style-loader', ...loaders];
        }

    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}
exports.styleLoaders = function (options) {
    const loaders = cssLoaders(options);

    return Object.keys(loaders).map(key => ({
        test: new RegExp(`\\.${key}$`),
        use: loaders[key]
    }));

}