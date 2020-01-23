const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

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
                loader: "vue-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'content/[hash].[ext]'
              }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'content/[hash].[ext]'
                }
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
        new CopyWebpackPlugin([
            { from: './public/' }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.css'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
};