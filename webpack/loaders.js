// todo: require .babelrc and build preset string from it
// const PRESET_STRING = presets.map((preset) => `../node_modules/babel-preset-${preset}`);

const fs = require('fs');
const BABEL_PRESETS = getBabelPresets();

module.exports = [
    {
        test: /\.js$|\.jsx$/,
        loaders: [
            'react-hot',
            'babel-loader?' + BABEL_PRESETS
        ],
        exclude: /node_modules/
    },
    {
        test: /\.styl$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
    },
    {
        test: /\.json$/,
        loaders: ['json-loader']
    },
    {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
    }
];

function getBabelPresets() {
    return JSON.parse(
        fs.readFileSync('.babelrc', { encoding: 'utf-8' }))
         .presets.map((preset) => `presets[]=../node_modules/babel-preset-${preset},`)
         .join('').slice(0, -1);
}

