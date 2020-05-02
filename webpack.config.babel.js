var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index.js'], 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
      rules: [{
          test: /\.js/,
          exclude: /(node_modules|bower_components)/,
          use: [{
              loader: 'babel-loader'
          }]
      }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js'],
  },
}