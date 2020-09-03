const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "cacheDirectory": true
                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['isomorphic-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}