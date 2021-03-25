const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack'); //to access built-in plugins
module.exports = {
    entry: {
        main: './src/index.js',
        pais: './src/pages/pais.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    mode: "development",
    resolve: {
        extensions: ['.js']
    },
    
    module: {
        rules: [
          
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'pais.html',
            template: './public/pais.html',
            chunks: ['pais']
        }),
        
            
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })    
    
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3030,
        open: true,
    }
    

}