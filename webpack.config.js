const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};