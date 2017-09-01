const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpack = require('webpack');

module.exports = function(env) {
  env = env || {};
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',

      './src/index.js'
    ],
    output: {
      filename: '[name].[hash].js',
      path: resolve(__dirname, 'dist/js'),
      publicPath: 'js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.styl$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        }
      ]
    },

    devtool: env.prod ? 'source-map' : 'eval',

    plugins: (function() {
      let defaultPlugins = [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          title: 'Code Notes',
          template: htmlWebpackTemplate,
          inject: false,
          appMountId: 'root',
          filename: '../index.html',
          alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
      ];
      if (env.prod) {
        defaultPlugins.concat([new webpack.optimize.UglifyJsPlugin()]);
      }
      return defaultPlugins;
    })(),

    devServer: {
      contentBase: 'dist',
      host: 'localhost',
      port: 3000,
      hot: true,
      historyApiFallback: true
    }
  };
};
