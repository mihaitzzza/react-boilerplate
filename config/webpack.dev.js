const path = require('path');

module.exports = {
  mode: 'development',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
