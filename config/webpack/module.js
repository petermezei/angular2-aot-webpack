'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader']
    },
    {
      test: /\.css$/,
      loaders: ['raw-loader']
    },
    {
      test: /\.html$/,
      use: 'raw-loader'
    }
  ]
};