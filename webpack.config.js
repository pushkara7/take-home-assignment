const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "/build/",
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: { extensions: [".js", ".jsx"] },

    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/build/",
        hot: true,
    },
};
