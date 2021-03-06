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
        hot: true,
        open: true,
        port: 9000
    },
    module: {
        rules: [{
                // todos los archivos que terminen en .js
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // todos los archivos que terminen en .css
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // todos los archivos que terminen en .css
                test: /\.jpg|png|gif|woof|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000
                    }

                }

            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React app',
            template: path.resolve(__dirname, 'index.html')
        })
        // new MiniCssExtraxtPlugin({
        //     filename: 'css/[name].css'
        // })

    ]

}