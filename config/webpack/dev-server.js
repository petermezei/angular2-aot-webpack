'use strict';

module.exports = {
  contentBase: './src',
  port: 9000,
  inline: true,
  historyApiFallback: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 100,
    poll: 500
  }
};