const path= require('path');
const {join}= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
   // mode: 'production',
    mode: 'development',
    entry: join(__dirname, '/src', 'index.js'),
    output:{
        filename:'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            //template:'./public/index.html'
            template:'./index.html'
        }),
    ],
    devServer:{
        static: "./dist",
        open: true,
    },
    module:{
        rules:[
        {
            test: /\.jsx|js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options:{
                presets:[
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
            },
        },
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
            exclude: /node_modules/,
        }],
    },
    resolve:{
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['.*', '.js', '.jsx'],
    },
};
