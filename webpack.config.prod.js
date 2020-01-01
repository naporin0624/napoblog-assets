/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./webpack.config.common");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

module.exports = {
  ...config,
  mode: "production",
  plugins: [
    ...config.plugins,
    new htmlWebpackPlugin({
      template: join(__dirname, "public/index.html"),
    }),
  ],
};
