const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

const publicPath = isDev ? '/' : '/dist/';

module.exports = {
  entry: [
    'react-hot-loader/patch', //设置这里
    './src/index.tsx',
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
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
};
