import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import webpack from 'webpack';

export default (env = {}) => {
  return {
    context: resolve(__dirname, 'src/'),
    entry: './app.js',
    output: {
      filename: '[name].[chunkhash].js',
      path: resolve(__dirname, 'dist/js'),
      publicPath: 'js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },

    devtool: env.prod ? 'source-map' : 'eval',

    plugins: (() => {
      let defaultPlugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Code Notes',
          template: htmlWebpackTemplate,
          inject: 'body',
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
      contentBase: 'dist'
    }
  };
};
