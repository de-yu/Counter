var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
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
    }
}

module.exports = config;