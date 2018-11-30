const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                loaders: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
