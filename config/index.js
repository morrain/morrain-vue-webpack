const path = require('path');

module.exports = {
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),

        //path
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/'
    }
}