const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        loader: 'url-loader',
        options: {
          name: '/public/images/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    alias: {
      process: 'process/browser',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
