/**
 * Created by fed on 16/6/29.
 */
'use strict';

 module.exports = {
  entry: './index.jsx',
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader',
          'css-loader']
      }
    ]
  }
};
