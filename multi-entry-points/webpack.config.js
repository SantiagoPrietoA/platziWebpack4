const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        precios: path.resolve(__dirname, 'src/precios.js'),
        contacto: path.resolve(__dirname, 'src/contacto.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js'
    }
}