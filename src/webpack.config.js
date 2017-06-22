let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
    entry: './vue/main.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'ac.js',
        chunkFilename: 'js/ac.[id].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        i18n: '@kazupon/vue-i18n-loader',
                        sass: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [['es2015', {modules: false}]],
                    plugins: ['syntax-dynamic-import']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/ac.css'
        }),
        new CopyWebpackPlugin([
            {from: 'index.html'},
            {from: 'node_modules/element-ui/lib/theme-default/index.css', to:'css/element.css'}
        ])
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
  ])
}
