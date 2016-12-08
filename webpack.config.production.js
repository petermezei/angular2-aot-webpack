'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: require('./config/webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./config/webpack/output'),

  module: require('./config/webpack/module'),

  plugins: require('./config/webpack/plugins-prod').concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]),

  resolve: require('./config/webpack/resolve'),

  stats: 'errors-only',

  devtool: 'source-map'
};