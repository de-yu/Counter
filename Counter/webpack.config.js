var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, "src");

// 調整 entry 和 output path 分別打包
var config = {
  mode:"none",
    entry: SRC_DIR + "/redux-async/js/index.js",
    output: {
        path: DIST_DIR + "/redux-async/js/",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 7000,
    },
    module: {
        rules: [
            {
                test: /\.js?/, exclude: /node_modules/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }, 
      plugins: [
   new webpack.LoaderOptionsPlugin({
     debug: true
   })
  ]
}

module.exports = config;