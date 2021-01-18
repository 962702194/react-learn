const path = require('path')

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
