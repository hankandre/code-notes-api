import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyjsWebpackPlugin from 'uglifyjs-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';

export default env => {
  return [
    {
      target: 'node',
      context: resolve('api'),
      entry: {
        main: './index.js'
      },
      output: {
        filename: 'server.js',
        path: resolve(__dirname, 'dist/api/')
      },
      devtool: env.prod ? 'source-map' : 'eval',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      node: true,
                      modules: 'umd',
                      debug: true
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    },
    {
      context: resolve('client/app/'),
      entry: {
        main: './index.js'
      },
      output: {
        filename: '[name].[chunkhash].js',
        path: resolve(__dirname, 'dist/client/')
      },

      devtool: env.prod ? 'source-map' : 'eval',

      stats: {
        colors: true,
        reasons: true,
        chunks: true
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: 'last 2 versions'
                    }
                  }
                ],
                'react'
              ]
            }
          }
        ]
      },

      plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Code Notes',
          template: resolve(__dirname, 'client/index.html'),
          inject: 'body'
        })
      ]
    }
  ];
};
