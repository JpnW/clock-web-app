'use strict';
var webpack = require('webpack');
var ORIGIN = __dirname + '/dev';
var APP = __dirname ;

module.exports = {
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  context: ORIGIN,
  entry: {
    app: [
      'webpack/hot/dev-server',
      './entry.js']
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 2016,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: APP
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};