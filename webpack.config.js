const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Template } = require("webpack");

module.exports={
    entry: './src/index.js',
    output:{
        filename:'main.bundle.js',
        path:__dirname +'/dist',
        publicPath: '',
        assetModuleFilename: 'asset/[hash][ext][query]'
    },
    module:{
        rules:[
            {
                test: /[.]scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|svg|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        
    ],
   
}