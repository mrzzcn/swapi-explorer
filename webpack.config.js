const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

const publicPath = isDev ? '/' : '/dist/';

module.exports = {
  entry: [
    'react-hot-loader/patch', //设置这里
    './src/index.js',
  ],
  devServer: {
    hot: true,
    publicPath,
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath,
    filename: 'bundle.js'
  },
  mode: 'development',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['@babel/env'] }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
};
