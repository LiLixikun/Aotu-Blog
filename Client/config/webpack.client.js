const path = require("path")
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin')
const baseConfig = require('./webpack.base')

const clientConfig = {
    mode: "development",
    entry: path.join(__dirname, "../src/client/index.tsx"),
    output: {
        filename: 'bundles.js',
        path: path.join(__dirname, "../dist/public")
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new LoadablePlugin({ filename: 'stats.json', writeToDisk: true })
    ]
}

module.exports = merge(baseConfig, clientConfig)