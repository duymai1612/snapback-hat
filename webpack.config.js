const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: {
        index: './index.jsx'
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        },
                    }
                ]
            },
            { test: /\.svg$/, loader: 'svg-inline' },
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
}