const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { default: merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const superConfig=require('./webpack.config');

module.exports= merge(superConfig ,{
    output:{
        filename: 'main.[contenthash].bundle.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].min.css'
        }), 
    ],
    mode: 'production'

}) 
 