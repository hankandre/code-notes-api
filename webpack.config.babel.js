import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyjsWebpackPlugin from 'uglifyjs-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

export default () => {
  return [
    {
      target: 'node',
      externals: [nodeExternals()],
      context: resolve('api'),
      entry: './index.js',
      output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist/api/')
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        ]
      }
    },
    {
      target: 'web',
      context: resolve('client/app/'),
      entry: './index.js',
      externals: [nodeExternals()],
      output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist/client/')
      },

      devtool: 'source-map',

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        ]
      },

      plugins: [
        new UglifyjsWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: resolve(__dirname, 'client/index.html'),
          inject: 'body'
        })
      ]
    }
  ];
};
