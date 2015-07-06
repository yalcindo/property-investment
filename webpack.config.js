var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js?$/,
                loader: require.resolve("babel-loader") + "?{'plugins':['object-assign']}",
                include: path.join(__dirname, "src")
            },
            { test: /\.json$/, loader: require.resolve("json-loader") },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor","vendor.js",Infinity)
    ]
};