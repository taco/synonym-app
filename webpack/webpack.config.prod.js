const loaders = require('./loaders');
const path = require('path');

module.exports = {
    entry: [
        './src/entry.js'
    ],
    output: {
        path: __dirname + '/../lib/',
        filename: 'bundle.js',
        publicPath: 'lib/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
        loaders: loaders
    }
};