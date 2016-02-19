const loaders = require('./loaders');
const path = require('path');

/**
* resolve.alias ensures that only one instance of React will be generated
**/

/**
* target: 'web' ensures that node libraries will not be built into the bundle
**/

/**
* resolveLoader ensures that only node modules
* relative to this application will be used
* which will include npm linked packages
**/

/**
* resolve.alias ensures that all apps use the same instances
* of the listed packages
* - react doesnt work when multiple instances are running
* - also this lessens the package weight for sub applications
*   as they dont require these dependencies
**/

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/entry.js'
    ],
    output: {
        path: __dirname,
        filename: 'assets/js/bundle.js',
        sourceMapFilename: 'debugging/[file].map',
        publicPath: 'http://localhost:8080/'
    },
    target: 'web',
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            react: path.join(__dirname, '/../node_modules/react'),
            'react-redux': path.join(__dirname, '/../node_modules/react-redux'),
            'react-dom': path.join(__dirname, '/../node_modules/react-dom'),
            'redux-thunk': path.join(__dirname, '/../node_modules/redux-thunk'),
            'react-hot-loader':
                path.join(__dirname, '/../node_modules/react-hot-loader'),
            immutable: path.join(__dirname, '/../node_modules/immutable')
        },
        modulesDirectories: [
            path.join(__dirname, '/../node_modules')
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, '/../node_modules')
    },
    module: {
        loaders: loaders
    },
    devtool: 'inline-source-map'
};