'use strict'

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const glob = require('glob')

let getEntry = (config) => {
    // 获取入口问点地址
    const entryFilesPath = glob.sync(path.join(__dirname, 'src/entry/*'))
    let entry = {}
    entryFilesPath.forEach(item => {
        let [name, suffix] = item.split('/').pop().split('.')
        entry[name] = item
    })
    config.entry = entry
}

let getHtmlPlugin = (config) => {
    Object.keys(config.entry).forEach(item => {
        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: `${item}.html`,
                template: path.resolve(__dirname, './src/vue/template.html'),
                chunks: [item]
            })
        )
    })
}

let config = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "js/[name]_[hash:8].js"
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1036491
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        // 开启scope Hoisting
        new ModuleConcatenationPlugin()
    ],
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    },

    devServer:  {
        port: "8081",
        host: "127.0.0.1",
        hot: true
    }
}

config.mode === 'development' && config.plugins.push(new webpack.HotModuleReplacementPlugin())
// config.mode === 'development' && config.plugins.push(
//     new webpackBundleAnalyzer({
//         analyzerMode: 'static'
//     })
// )

getEntry(config)
getHtmlPlugin(config)

module.exports = config