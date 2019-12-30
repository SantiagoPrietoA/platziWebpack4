const path = require('path');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [{
            // todos los archivos que terminen en .css
            test: /\.css$/,
            use: [
                'style-loader'
                // {
                //     loader: MiniCssExtraxtPlugin.loader
                // }
                ,
                'css-loader'
            ]
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack server'
        })
        // new MiniCssExtraxtPlugin({
        //     filename: 'css/[name].css'
        // })

    ]

}