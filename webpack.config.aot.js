'use strict';
let path = require('path');
const webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

module.exports = {
  entry: require('./config/webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./config/webpack/output'),

  module: require('./config/webpack/module'),

  plugins: require('./config/webpack/plugins').concat([
    new ngtools.AotPlugin({
      tsConfigPath: path.join(process.cwd(), 'tsconfig.aot.json'),
      baseDir: process.cwd(),
      entryModule: path.join(process.cwd(), 'src', 'app', 'main.module') + '#MainModule'
    }),
  ]),

  resolve: require('./config/webpack/resolve'),

  devServer: require('./config/webpack/dev-server'),

  stats: 'errors-only',

  devtool: 'source-map'
};