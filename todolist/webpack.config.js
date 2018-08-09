var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,'dist');
var SRC_DIR = path.resolve(__dirname,"src");


var config = {
  entry:[SRC_DIR + "/js/index.js"],
  output:{
    path:DIST_DIR + "/js/",
    filename:"bundle.js"
  },
  devServer:{
    contentBase:path.join(__dirname,"dist"),
    port:8080
  },
   module: {
        loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query: {
                presets:['es2015', 'react']
              }
          }
        ]
    }
}

module.exports = config;