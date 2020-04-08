/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./webpack.config.common");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...config,
  mode: "development",
  watch: true,
  devtool: "source-map",
  module: {
    rules: [
      ...config.module.rules,
      {
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    ...config.plugins,
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    host: "0.0.0.0",
    hot: true,
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
  },
};
