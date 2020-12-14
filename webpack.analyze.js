const webpack = require('webpack');
const { merge } = require('webpack-merge');
const prod = require('./webpack.prod.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(prod, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
