const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.dev.js',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', 'src/components'),
      constants: path.resolve(__dirname, '..', 'src/constants'),
      queries: path.resolve(__dirname, '..', 'src/queries'),
      style: path.resolve(__dirname, '..', 'src/style'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.dev.html',
    }),
  ],
};
