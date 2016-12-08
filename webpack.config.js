'use strict';
let path = require('path');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: require('./config/webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./config/webpack/output'),

  module: require('./config/webpack/module'),

  plugins: require('./config/webpack/plugins'),

  resolve: require('./config/webpack/resolve'),

  devServer: require('./config/webpack/dev-server'),

  stats: 'errors-only',

  devtool: 'source-map'
};