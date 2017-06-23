var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SOURCE_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SOURCE_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SOURCE_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }

};

module.exports = config;
