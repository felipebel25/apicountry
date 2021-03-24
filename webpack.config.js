const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
            template: './public/index.html',
            filename: 'index.html',
            template: './public/pais.html',
            filename: 'pais.html'
            }
            ),
            
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