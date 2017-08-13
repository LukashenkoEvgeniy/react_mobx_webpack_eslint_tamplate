const path               = require('path');
const webpack            = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const coreStyles         = new ExtractTextPlugin('./styles/core.bundle.css');
const componentStyles    = new ExtractTextPlugin('./styles/components.bundle.css');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.jsx')
    ],

    output   : {
        path      : __dirname + '/dist',
        publicPath: '/',
        filename  : './scripts/bundle.js'
    },

    // watch: true,
    // devtool: 'cheap-module-source-map',
    devtool: 'eval-source-map',

    resolve: {},

    module   : {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
            {
                test: /\.scss$|\.css$/,
                include: path.resolve(__dirname, './styles/App.scss'),
                use: coreStyles.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.scss$|\.css$/,
                exclude: path.resolve(__dirname, './styles/App.scss'),
                use: componentStyles.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg|xml)$/i, use: ['file-loader?name=images/[name].[ext]']
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader?name=fonts/[name].[ext]']
            },
        ]
    },

    devServer: {
        hot: true,
        contentBase: './',
        port: 3000
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './index.html', to: 'index.html' },
            // { from: 'images', to: 'images' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        coreStyles,
        componentStyles
    ],
};
