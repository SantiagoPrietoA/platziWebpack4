const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            // todos los archivos que terminen en .css
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }

}