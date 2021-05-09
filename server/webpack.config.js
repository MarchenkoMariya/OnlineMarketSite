const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/script.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
    },
}