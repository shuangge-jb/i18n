const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './main'),
        leftMenu: path.resolve(__dirname, './leftMenu'),
        instance: path.resolve(__dirname, './instance'),
        redis: path.resolve(__dirname, './redis'),
        // 'i18n.zh-CN': path.resolve(__dirname, './i18n.zh-CN'),
        // 'i18n.en-US': path.resolve(__dirname, './i18n.en-US'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        // publicPath:path.resolve(__dirname, './'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        loaders: [
            /*{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'eslint-loader'
                       
                    },*/
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        alias: {
            src: path.join(__dirname, './src'),
            angular: path.join(__dirname, './lib/angular.min'),
            // 'ui.router': path.join(__dirname, './lib/angular-ui-router'),
            // 'oc.lazyLoad': path.join(__dirname, './lib/ocLazyLoad.min'),
            i18n: path.join(__dirname, './i18n'),
            leftMenu: path.resolve(__dirname, './leftMenu'),
            instance: path.resolve(__dirname, './instance'),
            redis: path.resolve(__dirname, './redis'),
            'i18n.zh-CN': path.resolve(__dirname, './i18n.zh-CN'),
            'i18n.en-US': path.resolve(__dirname, './i18n.en-US'),
        }
    },
    devServer: {
        contentBase: __dirname + '/public', //本地服务器所加载的页面所在的目录
        historyApiFallback: false, //不跳转
        inline: true, //实时刷新,
        host: '0.0.0.0',
        port: 8080,

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new cleanWebpackPlugin(['public'], {
            root: __dirname,
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'dbm',
            filename: 'index.html',
            template: 'index.ejs'
        }),
        new copyWebpackPlugin([{
                from: 'lib/angular.min.js',
                to: 'lib'
            },
            {
                from: 'lib/angular-ui-router.js',
                to: 'lib'
            },
            {
                from: 'lib/ocLazyLoad.min.js',
                to: 'lib'
            }
        ])
    ]
};