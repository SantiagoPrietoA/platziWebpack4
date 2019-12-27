const path = require('path');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            // todos los archivos que terminen en .css
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtraxtPlugin.loader
                },
                'css-loader'
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCssExtraxtPlugin({
            filename: 'css/[name].css'
        })

    ]

}