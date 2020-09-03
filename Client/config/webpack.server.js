const path = require("path")
const nodeExternals = require('webpack-node-externals')

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = {
    mode: "development",
    target: "node",
    externals: [nodeExternals()],
    entry: path.join(__dirname, "../src/server/app.ts"),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                use: ["babel-loader"],
            }
        ]
    }
}

module.exports = merge(baseConfig, serverConfig)