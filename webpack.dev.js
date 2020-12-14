const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8081,
    // port: process.env.PORT,
    allowedHosts: [
      '.localhost',
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify("development"),
      ...process.env,
    }),
  ],
  // optimization: {
  //   chunkIds: 'natural'
  // }
});
