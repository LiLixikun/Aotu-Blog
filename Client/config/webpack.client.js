const path = require("path")
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base')

const clientConfig = {
    mode: "development",
    entry: path.join(__dirname, "../src/client/index.tsx"),
    output: {
        filename: 'bundles.js',
        path: path.join(__dirname, "../dist/public")
    },
    module: {
        rules: [

        ]
    }
}

module.exports = merge(baseConfig, clientConfig)