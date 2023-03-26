const { merge } = require('webpack-merge');
const commonConfig = require('./config/common.config');
const devConfig = require('./config/dev.config');
const prodConfig = require('./config/prod.config');

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
