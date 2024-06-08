const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    mode: 'development',
    devServer: {
        static: './dist',
    },


    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mariposa Cafe & Bakery',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    }, 
};