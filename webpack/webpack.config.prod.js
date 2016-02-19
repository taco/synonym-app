const loaders = require('./loaders');
const path = require('path');

module.exports = {
    entry: [
        './src/entry.js'
    ],
    output: {
        path: __dirname + '/../assets/js/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        loaders: loaders
    }
};