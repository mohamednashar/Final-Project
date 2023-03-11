const path = require("path");

module.exports = {
  mode: "development",
  entry: "./public/assets/js/index.js",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  watch: true,
};
