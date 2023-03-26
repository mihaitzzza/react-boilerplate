const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const zlib = require('zlib');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.prod.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.prod.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/images',
          to: './images',
        },
        // {
        //   from: './public/css',
        //   to: './css',
        // },
        // {
        //   from: './public/js',
        //   to: './js',
        // },
        // {
        //   from: './public/fonts',
        //   to: './fonts',
        // },
      ],
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new MiniCssExtractPlugin(),
  ],
};
