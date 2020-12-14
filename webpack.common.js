const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const maxFileSize = 2 * 1024 * 1024;

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "common": path.resolve(__dirname, "./src/common"),
      "features": path.resolve(__dirname, "./src/features"),
      "styles": path.resolve(__dirname, "./src/styles"),
      "store": path.resolve(__dirname, "./src/store"),
    },
  },
  entry: {
    polyfill: '@babel/polyfill',
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  performance: {
    maxEntrypointSize: maxFileSize,
    maxAssetSize: maxFileSize
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /.*\/components\/.*\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /.*\/components\/.*\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: false,
              modules: true,
            }
          },
          'sass-loader',
        ],
      },

    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'BillingService',
      library: {
        type: 'var',
        name: 'BillingService'
      },
      filename: 'mainRemoteEntry.js', // Name of the remote file
      exposes: {
        './BillingRouter': './src/common/components/Router/Router'
      },
      shared: ['react', 'react-dom', 'react-router-dom'], // If the consumer application already has these libraries loaded, it won't load them twice
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
      ]
    }),
    autoprefixer,
  ]
};
