const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack.common');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');

module.exports = (env, args) => {
  const { mode = 'development' } = args;

  if (mode === 'development') {
    return merge(commonConfig, devConfig);
  }

  if (mode === 'production') {
    return merge(commonConfig, prodConfig);
  }

  throw new Error('No matching configuration was found!');
};
